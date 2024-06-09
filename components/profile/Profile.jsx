import React, { useEffect, useState } from 'react';
import { Layout, theme } from 'antd';

import { useRouter } from 'next/router';

import ProfileCard from './profileCard/ProfileCard';
import LikedEvents from './events/liked/LikedEvents';
import ProfileMenu from './profileMenu/ProfileMenu';
import style from './Profile.module.scss';

const { Content, Sider } = Layout;

const avatars = [
  'https://xsgames.co/randomusers/avatar.php?g=pixel',
  'https://robohash.org/stefan-one',
  'https://robohash.org/stefan-two',
  'https://robohash.org/stefan-three',
  'https://avatars.dicebear.com/api/open-peeps/stefan.svg',
  'https://avatars.dicebear.com/api/croodles/stefan.svg',
];

const Profile = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(
    data ? `${data.firstName} ${data.lastName}` : ''
  );
  const [description, setDescription] = useState('Hello! This is me 👋🏼');
  const [selectedAvatar, setSelectedAvatar] = useState(
    'https://xsgames.co/randomusers/avatar.php?g=pixel'
  );


  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
  };

  const handleAvatarSelect = (avatarUrl) => {
    setSelectedAvatar(avatarUrl);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('accessToken');
    if (!isLoggedIn) {
      router.push('/auth/sign-in');
    }
  }, [router]);

  return (
    <div className={style.profile_page}>
      <Layout className={style.layout}>
        {/* Sider and Menu components go here */}
        <Sider width={200} style={{ background: colorBgContainer }}>
          <ProfileMenu />
        </Sider>

        <Layout style={{ padding: '24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <div className={style.content}>
              {/* <ProfileCard
                isEditing={isEditing}
                title={title}
                description={description}
                handleSaveChanges={handleSaveChanges}
                handleTitleChange={handleTitleChange}
                handleDescriptionChange={handleDescriptionChange}
                toggleEditMode={toggleEditMode}
                avatars={avatars}
                selectedAvatar={selectedAvatar}
                handleAvatarSelect={handleAvatarSelect}
              /> */}
              <LikedEvents userId={data} />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Profile;
