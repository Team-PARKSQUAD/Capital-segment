import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';

function CompartmentList({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Compartment List</Text>
            <StatusBar style="auto" />
            {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
        </SafeAreaView>
    )
}

export default CompartmentList

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  