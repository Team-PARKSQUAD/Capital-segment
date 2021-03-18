import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Alert} from 'react-native';
import { useStateValue } from '../context';

function AddCompartment({ navigation }) {
    const [ {list}, dispatch] = useStateValue()
    const [text, setText] = useState(null);
    const [number, setNumber] = useState(null);

    const AlertOnScreen = () => {
        dispatch({
            type: "set_value",
            data: {
                name: text,
                amount: number
            }
        })
        console.log(list)
        Alert.alert(text.concat(' - ', number) , "Changes Saved")
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.section} >
                <View style={styles.text} >
                    <Text style={{ fontWeight: '600', fontSize: 20 }} >Compartment Name:</Text>
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setText(text)}
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
                    onChangeText={number => setNumber(number)}
                    value={number}
                    placeholder="Enter Amount"
                />
            </View>
            <View style={styles.section} >
                <Button title='Submit' onPress={AlertOnScreen} />
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
  