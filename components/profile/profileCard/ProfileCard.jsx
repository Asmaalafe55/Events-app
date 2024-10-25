import React from 'react';
import axios from '../../../utils/axios';

const ProfileCard = ({ name, description }) => {
  return (
    <div style={{ width: 300 }}>
      {name}
      {description}
    </div>
  );
};

export default ProfileCard;
