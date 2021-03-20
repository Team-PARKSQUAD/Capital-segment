import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
        
        <StatusBar style="auto" />
        <TouchableOpacity onPress={() => navigation.push('Menu')}>
          <Image source = {require('../assets/27306493.jpg')} style={{ width: 80, height: 80 }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 17 }}>Segment</Text>

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
    app: {
      height: 60,
      width: 60,
      borderRadius: 10,
      backgroundColor: '#0079C1'
    }
  });
  