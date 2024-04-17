import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const JobDetailsScreen = ({ route }) => {
  const { job } = route.params;

  
  const availableJobs = [
    { id: 1, title: 'Job 1', description: 'Description for Job 1' },
    { id: 2, title: 'Job 2', description: 'Description for Job 2' },
    { id: 3, title: 'Job 3', description: 'Description for Job 3' },

  ];

  const handleApply = (selectedJob) => {

    alert('Successfully Applied for ' + selectedJob.title);
    
  };

  const renderJobItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleApply(item)}>
      <View style={styles.jobItem}>
        <Text style={styles.jobTitle}>{item.title}</Text>

      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.jobTitle}>{job.title}</Text>
        
        <FlatList
          data={availableJobs}
          renderItem={renderJobItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.jobList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jobTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  jobList: {
    width: '100%',
  },
  jobItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  jobDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default JobDetailsScreen;
