import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/truck-logo.png')} style={styles.logo} />
      <Text style={styles.title}>Truck Cargo</Text>

      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  logo: { width: 100, height: 100, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '80%', padding: 10, marginVertical: 10, borderWidth: 1, borderRadius: 5 },
  button: { backgroundColor: '#007bff', padding: 15, borderRadius: 5, marginTop: 20 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default LoginScreen;
