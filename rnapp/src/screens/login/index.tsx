import React from 'react';
import { View, StatusBar } from 'react-native';
import { Surface, Title, Button } from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view';

import { styles } from './styles';

export default function LoginScreen({ navigation }) {
  const backFunction = () => navigation.goBack();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.container}>
        <Surface style={styles.surface}>
          <Title style={{ color: 'black' }}>Login</Title>
          <View style={{ paddingVertical: 10 }}></View>
          <View style={{ paddingVertical: 10 }}></View>
          <Button
            style={styles.cadButton}
            mode="contained"
            onPress={backFunction}>
            Cancelar</Button>
        </Surface>
      </View>
    </SafeAreaView>
  )
}