import React from 'react';
import { Card, Input, Avatar } from 'antd';
import style from './ProfileCard.module.scss';
import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import AvatarSelect from '../avatarSelect/AvatarSelect';

const { Meta } = Card;

const ProfileCard = ({
  isEditing,
  title,
  description,
  handleSaveChanges,
  handleTitleChange,
  handleDescriptionChange,
  toggleEditMode,
  avatars,
  avatarSrc,
  setAvatarSrc,
  selectedAvatar,
  setSelectedAvatar,
  handleAvatarSelect,
}) => {
  const renderEditingSection = () => {
    return (
      <>
        {/* Render avatar selection component */}

        <Meta
          avatar={<Avatar src={avatarSrc} className={style.avatar} />}
          title={<Input value={title} onChange={handleTitleChange} />}
          description={
            <Input value={description} onChange={handleDescriptionChange} />
          }
        />

        <AvatarSelect
          avatars={avatars}
          selectedAvatar={avatarSrc}
          handleAvatarSelect={handleAvatarSelect}
        />
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
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        isEditing ? (
          <SaveOutlined key="save" onClick={handleSaveChanges} />
        ) : (
          <EditOutlined key="edit" onClick={toggleEditMode} />
        ),
      ]}
    >
      {isEditing ? renderEditingSection() : renderDisplaySection()}
    </Card>
  );
};

export default ProfileCard;
