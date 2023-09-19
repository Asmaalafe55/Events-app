import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import Profile from '../../components/profile/Profile';

const ProfilePage = (props) => {
  const initialData = props.data; // Initial data from getStaticProps or getServerSideProps
  const [data, setData] = useState(initialData); // State to hold the data

  useEffect(() => {
    // Ensure we are on the client side before using localStorage
    if (typeof window !== 'undefined') {
      // Get the email from local storage
      const email = localStorage.getItem('userEmail');

      // Make a request to fetch user information by email
      const fetchUserData = async () => {
        try {
          const res = await axios.get(`/users/email/${email}`);
          console.log('API Response:', res.data);
          // Update the state with the fetched data
          setData(res.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      if (email) {
        fetchUserData();
      }
    }
  }, []); // Run this effect only once on component mount
  console.log('A11111e:', data);

  return <Profile data={data} />;
};

export default ProfilePage;
