import React, { useEffect } from 'react';
import axios from '../../utils/axios';
import Profile from '../../components/profile/Profile';

const ProfilePage = (props) => {
  const data = props.data;

  useEffect(() => {
    // Ensure we are on the client side before using localStorage
    if (typeof window !== 'undefined') {
      // Get the email from local storage
      const email = localStorage.getItem('userEmail');
      console.log('Email from localStorage:', email);

      // Make a request to fetch user information by email
      const fetchUserData = async () => {
        try {
          const res = await axios.get(`/users/email/${email}`);
          console.log('API Response:', res.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      if (email) {
        fetchUserData();
      }
    }
  }, []); // Run this effect only once on component mount

  return <Profile data={data} />;
};

export default ProfilePage;
