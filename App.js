// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação
    if (email && password) {
      navigation.navigate('Taxes');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <ImageBackground source={require('./assets/background.jpg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Logo */}
          <Image
            source={require('./assets/Taboão_Logo.png')} // Substitua pelo caminho do seu logo
            style={styles.logo}
          />
          <Text style={styles.subtitle}>LOGIN</Text>
          
          <TextInput
            style={styles.input}
            placeholder="CNPJ:"
            placeholderTextColor="#FFF"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <TextInput
            style={styles.input}
            placeholder="SENHA:"
            placeholderTextColor="#FFF"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOGAR</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>CADASTRAR</Text>
          </TouchableOpacity>
          
          {/* Sobre nós com fundo */}
          <View style={styles.aboutContainer}>
            <Text style={styles.aboutText}>
              Sobre nós: Nosso objetivo é fazer bom uso da arrecadação estatal e dar à população acesso às necessidades básicas. Dessa forma, podemos proporcionar melhores condições às nossas crianças, que são o futuro da cidade e da nação.
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  logo: {
    width: 280, // Reduzi o tamanho do logo para liberar espaço
    height: 80, // Reduzi o tamanho do logo para liberar espaço
    marginBottom: 10,
    resizeMode: 'cover' // Reduzi o espaçamento
  },
  subtitle: {
    fontSize: 20,
    color: '#555',
    marginBottom: 10, // Reduzi o espaçamento
  },
  input: {
    width: '100%',
    height: 40, // Reduzi a altura do campo de entrada
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10, // Reduzi o espaçamento
    backgroundColor: '#E52613',
  },
  button: {
    width: '100%',
    height: 40, // Reduzi a altura do botão
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10, // Reduzi o espaçamento
  },
  buttonText: {
    color: '#9A0909',
    fontSize: 16, // Reduzi o tamanho da fonte
    fontWeight: 'bold',
  },
  signupButton: {
    width: '100%',
    height: 40, // Reduzi a altura do botão
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#007BFF',
    borderWidth: 1,
    marginBottom: 10, // Reduzi o espaçamento
  },
  signupText: {
    color: '#007BFF',
    fontSize: 14, // Reduzi o tamanho da fonte
  },
  aboutContainer: {
    backgroundColor: '#E52613',
    padding: 10, // Reduzi o padding
    borderRadius: 10,
    width: '100%',
    marginTop: 10, // Adicionei um espaçamento superior
  },
  aboutText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 12, // Reduzi o tamanho da fonte
    lineHeight: 18, // Reduzi o espaçamento entre linhas
  },
});

export default LoginScreen;