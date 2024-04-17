import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import backgroundImage from './R.jpg';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('employer');
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedGender, setSelectedGender] = useState('');
  const cities = ['Mumbai', 'Pune', 'Nagpur', 'Chennai', 'Delhi', 'Kolkata'];
  const genders = ['Male', 'Female', 'Other'];

  const handleLogin = () => {
    if (selectedRole === 'employer') {
      navigation.navigate('EmployerHome');
    } else {
      navigation.navigate('JobSeekerHome');
      alert("Welcome " + username);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <View style={styles.inputBox}>
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
            selectedValue={selectedRole}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedRole(itemValue)}
          >
            <Picker.Item label="Employer" value="employer" />
            <Picker.Item label="Job Seeker" value="jobseeker" />
          </Picker>
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
          <Button title="Let's Go" onPress={handleLogin} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
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
  inputBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 50,
    width: '90%', 
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
