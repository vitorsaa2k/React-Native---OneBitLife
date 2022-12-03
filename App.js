import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Start } from './src/Pages/Start/index'
import { Routes } from './src/Routes';

export default function App() {
  return (
    <>
    <StatusBar barStyle={'auto'} />
    <Routes />
    </>
  )
}