import React from 'react';
import axios from '../../../utils/axios';

const ProfileCard = ({ name, description }) => {
  return (
    <div>
      {name}
      {description}
    </div>
  );
};

export default ProfileCard;
