import React from 'react';
import { View, StatusBar } from 'react-native';
import { Surface, Title, Button } from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view';

import { styles } from './styles';

export default function OnboardingScreen({ navigation }) {
  const navigateToRegister = () => navigation.navigate("Register");
  const navigateToLogin = () => navigation.navigate("Login");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.container}>
        <Surface style={styles.surface}>
          <Title style={{ color: 'black' }}>Devac Chat Room</Title>
          <View style={{ paddingVertical: 10 }}></View>
          <Button
            style={styles.inButton}
            mode="contained"
            onPress={navigateToLogin}>
            Entrar</Button>
          <View style={{ paddingVertical: 10 }}></View>
          <Button
            style={styles.cadButton}
            mode="contained"
            onPress={navigateToRegister}>
            Cadastrar</Button>
        </Surface>
      </View>
    </SafeAreaView>
  )
}