import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';

export default function Home({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Button title="Menu" onPress={() => navigation.push('Menu')} />
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  