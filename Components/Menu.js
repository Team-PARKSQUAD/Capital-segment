import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';

function Menu({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />

            <Button title="Compartment List" onPress={() => navigation.push('CompartmentList')} />
            <Button title="Add Compartment" onPress={() => navigation.push('AddCompartment')} />
        </SafeAreaView>
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  