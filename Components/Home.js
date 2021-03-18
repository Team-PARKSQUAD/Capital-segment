import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';

export default function Home({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.app} >
          <Button title="" onPress={() => navigation.push('Menu')} />
        </View>
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
  