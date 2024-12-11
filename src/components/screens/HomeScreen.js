import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {globalStyles} from './globalStyles';
import {theme} from './theme';

const HomeScreen = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state.user.currentUser);

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.headerContainer}>
        <Text style={globalStyles.title}>AccessiMap</Text>
        {user && (
          <Text style={styles.welcomeText}>Bonjour, {user.firstName}</Text>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={globalStyles.primaryButton}
          onPress={() => navigation.navigate('Map')}>
          <Text style={globalStyles.buttonText}>Carte Interactive</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.primaryButton}
          onPress={() => navigation.navigate('ReportObstacle')}>
          <Text style={globalStyles.buttonText}>Signaler un Obstacle</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.primaryButton}
          onPress={() => navigation.navigate('Profile')}>
          <Text style={globalStyles.buttonText}>Mon Profil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  welcomeText: {
    fontSize: 18,
    color: theme.colors.text,
    marginTop: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
