import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Logo et titre sur la même ligne */}
      <View style={styles.header}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.schoolName}>EMSI MAARIF</Text>
      </View>

      {/* Informations de l’étudiant */}
      <View style={styles.info}>
        <Text style={styles.label}>
          Nom : <Text style={styles.value}>MOUGHAMIR</Text>
        </Text>
        <Text style={styles.label}>
          Prénom : <Text style={styles.value}>MOHAMED</Text>
        </Text>
        <Text style={styles.label}>
          Année universitaire : <Text style={styles.value}>2025 / 2026</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // centre verticalement l’ensemble
    alignItems: 'center',
    backgroundColor: '#f6f7fb',
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',       // logo et texte sur la même ligne
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 30,           // espace entre header et infos
  },
  logo: {
    width: 100,
    height: 100,
  },
  schoolName: { 
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
    letterSpacing: 1,
    marginLeft: 10,
  },
  info: {
    alignItems: 'center',
    gap: 8, // espace entre les lignes d’infos
  },
  label: {
    fontSize: 16,
    color: '#6b7280',
    fontWeight: '500',
  },
  value: {
    fontSize: 17,
    color: '#111827',
    fontWeight: 'bold',
  },
});