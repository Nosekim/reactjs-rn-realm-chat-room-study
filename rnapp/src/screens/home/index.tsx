import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        mode="contained"
        onPress={() => {}}
        
      >Go to notifications</Button>
    </View>
  );
}
