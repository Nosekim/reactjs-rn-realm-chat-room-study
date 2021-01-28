import React from 'react';
import { View, StatusBar } from 'react-native';
import { Surface, Title, Button, TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SafeAreaView from 'react-native-safe-area-view';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { styles } from './styles';

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

export default function RegisterScreen({ navigation }) {
  const { control, register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);
  const backFunction = () => navigation.goBack();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Surface style={styles.surface}>
            <Title style={{ color: 'black' }}>Cadastrar</Title>
            <View style={{ paddingVertical: 10 }}></View>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  mode="flat"
                  label="Email"
                  value={value}
                  onChangeText={text => onChange(text)}
                  style={styles.textInput}
                  selectionColor="#000"
                />
              )}
              name="email"
              defaultValue=""
            />
            {errors.firstName && <Text>This is required.</Text>}
            <View style={{ paddingVertical: 10 }}></View>
            <Button
              style={styles.cadButton}
              mode="contained"
              onPress={backFunction}>
              Enviar</Button>
            <View style={{ paddingVertical: 10 }}></View>
            <Button
              style={styles.cadButton}
              mode="contained"
              onPress={backFunction}>
              Cancelar</Button>
          </Surface>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}