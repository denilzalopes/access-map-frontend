import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useDispatch, useSelector} from 'react-redux';
import {validateObstacleReport} from './validationHelpers';
import {submitObstacleReport} from './mapSlice';
import {theme} from './theme';
import {globalStyles} from './globalStyles';

const ReportObstacleScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.currentUser);
  const [obstacleData, setObstacleData] = useState({
    type: 'mobility',
    title: '',
    description: '',
    severity: 'medium',
  });

  const handleSubmit = async () => {
    try {
      const validationResult = validateObstacleReport(obstacleData);

      if (!validationResult.valid) {
        Alert.alert('Erreur', validationResult.errors.join('\n'));
        return;
      }

      // Récupérer la position actuelle avant soumission
      navigator.geolocation.getCurrentPosition(
        async position => {
          const reportData = {
            ...obstacleData,
            userId: user.id,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };

          const result = await dispatch(submitObstacleReport(reportData));

          if (result.payload) {
            Alert.alert('Succès', 'Obstacle signalé avec succès');
            navigation.navigate('Home');
          }
        },
        error => {
          Alert.alert('Erreur', 'Impossible de récupérer votre position');
        },
      );
    } catch (error) {
      Alert.alert('Erreur', 'Échec de la soumission');
    }
  };

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Signaler un Obstacle</Text>

      <View style={styles.pickerContainer}>
        <Text>Type d'accessibilité:</Text>
        <Picker
          selectedValue={obstacleData.type}
          onValueChange={value =>
            setObstacleData({...obstacleData, type: value})
          }>
          <Picker.Item label="Mobilité réduite" value="mobility" />
          <Picker.Item label="Déficience visuelle" value="visual" />
          <Picker.Item label="Déficience auditive" value="hearing" />
        </Picker>
      </View>

      <TextInput
        style={globalStyles.input}
        placeholder="Titre de l'obstacle"
        value={obstacleData.title}
        onChangeText={text => setObstacleData({...obstacleData, title: text})}
      />

      <TextInput
        style={[globalStyles.input, styles.multilineInput]}
        placeholder="Description détaillée"
        multiline
        numberOfLines={4}
        value={obstacleData.description}
        onChangeText={text =>
          setObstacleData({...obstacleData, description: text})
        }
      />

      <View style={styles.pickerContainer}>
        <Text>Niveau de sévérité:</Text>
        <Picker
          selectedValue={obstacleData.severity}
          onValueChange={value =>
            setObstacleData({...obstacleData, severity: value})
          }>
          <Picker.Item label="Faible" value="low" />
          <Picker.Item label="Moyen" value="medium" />
          <Picker.Item label="Élevé" value="high" />
        </Picker>
      </View>

      <TouchableOpacity
        style={globalStyles.primaryButton}
        onPress={handleSubmit}>
        <Text style={globalStyles.buttonText}>Soumettre</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    marginVertical: 10,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default ReportObstacleScreen;
