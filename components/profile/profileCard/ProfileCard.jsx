import React from 'react';
import { Card, Input, Avatar, Button } from 'antd';
import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import axios from '../../../utils/axios';
import AvatarSelect from '../avatarSelect/AvatarSelect';
const { Meta } = Card;

const ProfileCard = ({
  // userId,
  isEditing,
  title,
  description,
  handleSaveChanges,
  handleTitleChange,
  handleDescriptionChange,
  toggleEditMode,
  avatars,
  selectedAvatar,
  handleAvatarSelect,
}) => {
  const saveChanges = async () => {
    try {
      // const response = await axios.put(`/users/${userId}`, {
      const response = await axios.put('/users/update/6665a67f8e6599ab96d673e5', {

        firstName: title.split(' ')[0],
        lastName: title.split(' ')[1],
        description: description,
        avatarUrl: selectedAvatar,
      });
      console.log('User info updated:', response.data);
      handleSaveChanges();
    } catch (error) {
      console.error('Error updating user info:', error);
    }
  };

  const renderEditingSection = () => (
    <>
      <Meta
        avatar={<Avatar src={selectedAvatar} />}
        title={<Input value={title} onChange={handleTitleChange} />}
        description={<Input value={description} onChange={handleDescriptionChange} />}
      />
      {/* Render avatar selection component */}
      <AvatarSelect
        avatars={avatars}
        selectedAvatar={selectedAvatar}
        handleAvatarSelect={handleAvatarSelect}
      />
      <Button onClick={saveChanges} icon={<SaveOutlined />} />
    </>
  );

  const renderDisplaySection = () => (
    <Meta
      avatar={<Avatar src={selectedAvatar} />}
      title={title}
      description={description}
    />
  );

  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt="example" src="https://example.com/image.png" />}
      actions={[
        isEditing ? <SaveOutlined key="save" onClick={saveChanges} /> : <EditOutlined key="edit" onClick={toggleEditMode} />,
      ]}
    >
      {isEditing ? renderEditingSection() : renderDisplaySection()}
    </Card>
  );
};

export default ProfileCard;
