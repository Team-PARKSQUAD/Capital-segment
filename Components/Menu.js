import React, {useContext} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import { StateContext } from '../context';

function Menu({ navigation }) {
    const [{list}, dispatch] = useContext(StateContext)
    const values = [];
    const accountBal = 50000; // If starting balance in the reducer change, this shoul also change
    list.map(ls => values.push(  (ls.amount/accountBal) * 100  ))
    values[0] = 100 - values.slice(1).reduce((a, b) => a + b, 0)
    const value = values[0]*500;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.buttons} >
                <Button title="Compartment List" onPress={() => navigation.push('CompartmentList')} />
                <Button title="Add Compartment" onPress={() => navigation.push('AddCompartment')} />
            </View>

            <View style={styles.balance}>
                <Text style={styles.text}>Available Balance: { value }</Text>
            </View>
        </SafeAreaView>
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    //   justifyContent: 'center',
    },
    buttons: {
        marginTop: 20,
    },
    balance: {
        height: 50,
        width: 200,
        backgroundColor: '#0079C1',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
    }
  });
  