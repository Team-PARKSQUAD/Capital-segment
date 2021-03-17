import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput} from 'react-native';

function AddCompartment({ navigation }) {
    
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <Text>Compartment Name:</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Enter Name"
            />
            <Text>Amount:</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Enter Amount"
                keyboardType="numeric"
            />
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

export default AddCompartment

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  