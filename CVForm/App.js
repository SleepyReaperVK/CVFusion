import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AdvencedForm from './components/AdvencedForm';
import ManualForm from './components/ManualForm';
import ComponentSelector from './components/ComponentSelector';
import MainForm from './components/MainForm';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
    <MainForm/>
        <StatusBar style="auto" />
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
