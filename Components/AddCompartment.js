import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput} from 'react-native';

function AddCompartment({ navigation }) {
    
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.section} >
                <View style={styles.text} >
                    <Text style={{ fontWeight: '600', fontSize: 20 }} >Compartment Name:</Text>
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Enter Name"
                />
            </View>

            <View style={styles.section} >
                <View style={styles.text} >
                    <Text style={{ fontWeight: '600', fontSize: 20 }} >Amount:</Text>
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Enter Amount"
                    keyboardType="numeric"
                />
            </View>

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

    },
    section: {
        marginTop: 20,
        height: 80,
    },
    text: {
        width: 250,
        backgroundColor: '#0079C1',
        borderRadius: 20,
        padding: 10,
    },
    input: {
        width: 250,
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 10,
        padding: 5,
    },
});
  