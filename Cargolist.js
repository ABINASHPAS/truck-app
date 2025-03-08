import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CargoListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cargo List</Text>
      <Text style={styles.item}>🚛 Cargo 1 - Delivered</Text>
      <Text style={styles.item}>🚛 Cargo 2 - In Transit</Text>
      <Text style={styles.item}>🚛 Cargo 3 - Pending</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  item: { fontSize: 18, padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
});

export default CargoListScreen;
