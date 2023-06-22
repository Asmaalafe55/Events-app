import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const ProfilePage = () => {
  const history = useHistory();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('access_token');

    if (!isLoggedIn) {
      history.push('/auth/sign-in');
    }
  }, [history]);

  return <div>Profile page</div>;
};

export default ProfilePage;
