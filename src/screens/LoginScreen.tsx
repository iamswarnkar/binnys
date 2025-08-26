import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Input from '../components/Input';
import { RootStackParamList } from '../type/types';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

const LoginScreen = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const { navigate } = useNavigation<LoginScreenNavigationProp>();

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  const validateCredentials = (
    email: string,
    password: string,
  ): string | null => {
    if (!email.trim() || !password.trim()) {
      return 'Email and Password cannot be empty.';
    }
    if (!validateEmail(email)) {
      return 'Please enter a valid email address.';
    }
    return null;
  };

  const handleLogin = () => {
    const { email, password } = credentials;
    const errorMessage = validateCredentials(email, password);

    if (errorMessage) {
      Alert.alert('Validation Error', errorMessage);
      return;
    }

    Alert.alert('Login Successful', `Welcome, ${email}`, [
      {
        text: 'OK',
        onPress: () => navigate('PostList'),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Input
        label="Email"
        placeholder="e.g., user@example.com"
        value={credentials.email}
        onChangeText={email =>
          setCredentials(prevState => ({ ...prevState, email }))
        }
        keyboardType="email-address"
        autoCapitalize="none"
        hint="We'll never share your email with anyone else."
      />
      <Input
        label="Password"
        placeholder="Enter your password"
        value={credentials.password}
        onChangeText={password =>
          setCredentials(prevState => ({ ...prevState, password }))
        }
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
});

export default LoginScreen;
