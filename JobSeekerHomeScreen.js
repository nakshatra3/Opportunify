import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const JobSeekerHomeScreen = () => {
  const navigation = useNavigation();

  const jobs = [
    { id: 1, title: 'House Maid', description: 'Cleaning Floors\nWashing Dishes', imageUrl: 'https://th.bing.com/th/id/OIP.MF7GXzMNXL288ByqJ5-y2AHaHj?w=189&h=193&c=7&r=0&o=5&dpr=1.6&pid=1.7' },
    { id: 2, title: 'Construction Worker', description: 'Building Roads\nCarrying Goods', imageUrl: 'https://th.bing.com/th?id=OIP.1vY_8nZabIl9hogvCX7DUwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2' },
    { id: 3, title: 'Drivers', description: 'Taxi Driver\nBus Driver', imageUrl: 'https://th.bing.com/th?id=OIP.Jki7QlWtX4DCGgKdFyl15AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2' },
  ];

  const navigateToJobDetails = (job) => {
    navigation.navigate('JobDetails', { job });
  };

  const handleNotificationsPress = () => {

    navigation.navigate('Notifications');
  };

  const handleMessagesPress = () => {
  
    navigation.navigate('Messages');
  };

  const renderJobItem = ({ item }) => (
    <TouchableOpacity style={styles.jobItem} onPress={() => navigateToJobDetails(item)}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground 
      source={require('./R.jpg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Available Jobs</Text>
          <View style={styles.iconsContainer}>
           
            <TouchableOpacity onPress={handleNotificationsPress}>
              <Feather name="bell" size={24} color="black" style={styles.icon} />
            </TouchableOpacity>
     
            <TouchableOpacity onPress={handleMessagesPress}>
              <Feather name="message-square" size={24} color="black" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={jobs}
          renderItem={renderJobItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
  },
  jobItem: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default JobSeekerHomeScreen;
