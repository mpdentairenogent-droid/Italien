import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider, useAuth } from './src/auth/AuthContext';
import { LoadingView } from './src/components/LoadingView';
import { RootNavigator } from './src/navigation/RootNavigator';
import { AuthScreen } from './src/screens/AuthScreen';
import { AppStateProvider } from './src/state/AppState';
import { isSupabaseConfigured } from './src/supabase/client';

function Gate() {
  const { ready, session } = useAuth();
  if (!ready) return <LoadingView />;
  if (isSupabaseConfigured && !session) return <AuthScreen />;
  return (
    <AppStateProvider>
      <RootNavigator />
    </AppStateProvider>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Gate />
        <StatusBar style="dark" />
      </AuthProvider>
    </SafeAreaProvider>
  );
}
