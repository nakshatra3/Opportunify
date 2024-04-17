import React, { useState } from 'react';
import { View, Text, Button, TextInput, ImageBackground, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const EmployerHomeScreen = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobCategory, setJobCategory] = useState('General');
  const [workingHours, setWorkingHours] = useState('');
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');

  const handleJobSubmission = () => {
    console.log('Job posted:', {
      title: jobTitle,
      description: jobDescription,
      category: jobCategory,
      workingHours: workingHours,
      minSalary: minSalary,
      maxSalary: maxSalary,
    });
  };

  return (
    <ImageBackground 
      source={require('./R.jpg')}
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Employer!</Text>

        <View style={styles.jobPostBox}>
          <Picker
            selectedValue={jobCategory}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setJobCategory(itemValue)}
          >
            <Picker.Item label="General" value="General" />
            <Picker.Item label="HouseMaid" value="HouseMaid" />
            <Picker.Item label="Driver" value="Driver" />
            <Picker.Item label="Construction" value="Construction" />
          </Picker>

          <TextInput
            placeholder="Job Title"
            value={jobTitle}
            onChangeText={text => setJobTitle(text)}
            style={[styles.input, { marginBottom: 5 }]}
          />
          <TextInput
            placeholder="Job Description"
            value={jobDescription}
            onChangeText={text => setJobDescription(text)}
            multiline
            numberOfLines={4}
            style={styles.input}
          />
          <TextInput
            placeholder="Working Hours"
            value={workingHours}
            onChangeText={text => setWorkingHours(text)}
            style={[styles.input, { marginBottom: 5 }]}
          />
          <View style={styles.salaryContainer}>
            <TextInput
              placeholder="Min Salary"
              value={minSalary}
              onChangeText={text => setMinSalary(text)}
              style={[styles.input, { marginRight: 5 }]}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="Max Salary"
              value={maxSalary}
              onChangeText={text => setMaxSalary(text)}
              style={styles.input}
              keyboardType="numeric"
            />
          </View>

          <Button title="Post Job" onPress={handleJobSubmission} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  jobPostBox: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
  input: {
    marginVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    height: 40,
  },
  salaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default EmployerHomeScreen;
