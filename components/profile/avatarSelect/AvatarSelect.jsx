import React from 'react';
import { Avatar } from 'antd';
import style from './AvatarSelect.module.scss';

const AvatarSelect = ({ avatars, selectedAvatar, handleAvatarSelect }) => {
  return (
    <div className={style.avatarCollection}>
      {avatars.map((avatarUrl) => (
        <Avatar
          key={avatarUrl}
          src={avatarUrl}
          size={64}
          onClick={() => handleAvatarSelect(avatarUrl)}
          className={`${style.avatar} ${
            selectedAvatar === avatarUrl ? style.selectedAvatar : ''
          }`}
        />
      ))}
    </div>
  );
};

export default AvatarSelect;
