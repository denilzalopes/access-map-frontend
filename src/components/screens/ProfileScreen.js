import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useUser} from '../hooks/useUser';

const ProfileScreen = ({navigation}) => {
  const {user, logoutUser} = useUser();

  const handleLogout = () => {
    logoutUser();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 20},
});

export default ProfileScreen;
