import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Pie from './PieChart.js';

function CompartmentList({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Pie/>
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
  