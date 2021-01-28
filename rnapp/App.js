import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import MainRoute from './src/routes/main.stack';
import { AuthProvider } from './src/providers/auth.provider';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <AuthProvider>
      <PaperProvider>
        <SafeAreaProvider>
          <MainRoute />
        </SafeAreaProvider>
      </PaperProvider>
    </AuthProvider>
  )
}
