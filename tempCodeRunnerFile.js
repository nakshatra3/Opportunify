import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedGender, setSelectedGender] = useState(''); // Added gender state
  const cities = ['Mumbai' , 'Pune' , 'Nagpur' , 'Chennai' , 'Delhi' , 'Kolkata'];
  const genders = ['Male', 'Female', 'Other']; // Added gender options

  const handleLogin = () => {
    if(username=='Nakshatra'){
    navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        onChangeText={(text) => setMobileNumber(text)}
        value={mobileNumber}
        keyboardType="phone-pad"
      />
      <Picker
        selectedValue={selectedCity}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}
      >
        <Picker.Item label="Select City" value={null} />
        {cities.map((city, index) => (
          <Picker.Item key={index} label={city} value={city} />
        ))}
      </Picker>
      <Picker
        selectedValue={selectedGender}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedGender(itemValue)}
      >
        <Picker.Item label="Select Gender" value="" />
        {genders.map((gender, index) => (
          <Picker.Item key={index} label={gender} value={gender} />
        ))}
      </Picker>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  picker: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default LoginScreen;
