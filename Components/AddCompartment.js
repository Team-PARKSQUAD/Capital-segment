import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Alert} from 'react-native';
import { useStateValue } from '../context';
import AllInOneSDKManager from 'paytm_allinone_react-native';

function AddCompartment({ navigation }) {
    const [ {list}, dispatch] = useStateValue()
    const [text, setText] = useState(null);
    const [number, setNumber] = useState(null);

    function startPayment() {
        console.log('Payment Initiated');
        AllInOneSDKManager.startTransaction(
            orderId,
            mid,
            tranxToken,
            amount,
            callbackUrl,
            isStaging,
            appInvokeRestricted,
          )
          .then((result) => {
           console.log("result", result); 
           // handle result ..
          })
          .catch((err) => {
           // handle error ..
          });
    }

    function addData() {
        dispatch({
            type: "set_value",
            data: {
                name: text,
                amount: number
            }
        })
        console.log('Data Added');
        navigation.push('CompartmentList');
    }

    const AlertOnScreen = () => {
        Alert.alert(
            text.concat(' - ', number), 
            "Changes Saved",
            [
                { text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                },
                { text: "OK", 
                // onPress: () => startPayment(),
                onPress: () => addData(),
                }
            ]
        )
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.section} >
                <View style={styles.text} >
                    <Text style={{ fontWeight: '500', fontSize: 16, color:'white' }} >Compartment Name</Text>
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
                    <Text style={{ fontWeight: '500', fontSize: 16, color:'white' }} > Amount</Text>
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
        height: 50,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#003966',
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
  