import React, { useState } from 'react';

export const JobContext = React.createContext();

export const JobProvider = ({ children }) => {
  const [postedJobs, setPostedJobs] = useState([]);

  const addPostedJob = (job) => {
    setPostedJobs([...postedJobs, job]);
  };

  return (
    <JobContext.Provider value={{ postedJobs, addPostedJob }}>
      {children}
    </JobContext.Provider>
  );
};
