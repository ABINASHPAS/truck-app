import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Truck Management</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CargoList')}>
        <Text style={styles.buttonText}>Cargo List</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Map')}>
        <Text style={styles.buttonText}>Track Route</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Emergency')}>
        <Text style={styles.buttonText}>Emergency</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: { backgroundColor: '#007bff', padding: 15, borderRadius: 5, marginVertical: 10, width: '80%', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default HomeScreen;
