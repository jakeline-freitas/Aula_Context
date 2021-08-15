import React from 'react';
import { Routes } from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { DataProvider } from './src/contexts/DataProvider';

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </DataProvider>
  )
}