import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {useSelector, useDispatch} from 'react-redux';
import {fetchMapObstacles} from './mapSlice';
import {theme} from './theme';

const MapScreen = () => {
  const dispatch = useDispatch();
  const [userLocation, setUserLocation] = useState(null);
  const obstacles = useSelector(state => state.map.obstacles);

  useEffect(() => {
    // Récupérer la position actuelle
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setUserLocation({
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });

        // Charger les obstacles autour de la position
        dispatch(fetchMapObstacles({latitude, longitude}));
      },
      error => console.error('Erreur de géolocalisation:', error),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, [dispatch]);

  const obstacleIcons = {
    mobility: require('./assets/wheelchair-icon.png'),
    visual: require('./assets/blind-icon.png'),
    hearing: require('./assets/deaf-icon.png'),
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={userLocation}
        showsUserLocation
        showsMyLocationButton>
        {obstacles.map(obstacle => (
          <Marker
            key={obstacle.id}
            coordinate={{
              latitude: obstacle.latitude,
              longitude: obstacle.longitude,
            }}
            title={obstacle.title}
            description={obstacle.description}
            image={obstacleIcons[obstacle.type] || obstacleIcons.mobility}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
