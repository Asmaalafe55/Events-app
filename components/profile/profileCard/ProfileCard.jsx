import React from 'react';
import { Card, Input, Avatar } from 'antd';
import style from './ProfileCard.module.scss';

const { Meta } = Card;

const ProfileCard = ({
  isEditing,
  title,
  description,
  avatarSrc,
  handleTitleChange,
  handleDescriptionChange,
}) => {
  const renderEditingSection = () => {
    return (
      <>
        <Meta title={<Input value={title} onChange={handleTitleChange} />} />
        <Input value={description} onChange={handleDescriptionChange} />
      </>
    );
  };

  const renderDisplaySection = () => {
    return (
      <Meta
        avatar={<Avatar src={avatarSrc} className={style.avatar} />}
        title={title}
        description={description}
      />
    );
  };

  return (
    <Card style={{ width: 300 }}>
      {isEditing ? renderEditingSection() : renderDisplaySection()}
    </Card>
  );
};

export default ProfileCard;
