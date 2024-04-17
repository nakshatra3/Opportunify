import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import JobSeekerHomeScreen from './JobSeekerHomeScreen';
import EmployerHomeScreen from './EmployerHomeScreen';
import JobDetailsScreen from './JobDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="JobSeekerHome" component={JobSeekerHomeScreen} />
          <Stack.Screen name="EmployerHome" component={EmployerHomeScreen} />
          <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
