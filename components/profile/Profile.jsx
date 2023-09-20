import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import style from './Profile.module.scss';
import { Layout, Menu, theme, Input, Avatar, Card } from 'antd';
import {
  SettingOutlined,
  PieChartOutlined,
  UserOutlined,
  EditOutlined,
  SaveOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

const { Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Profile', '1', <UserOutlined />),
  getItem('Events', 'sub1', <PieChartOutlined />, [
    getItem('Liked', '3'),
    getItem('Registered', '4'),
    getItem('Expired', '5'),
    getItem('Canceled', '6'),
    getItem('Deleted', '7'),
  ]),

  getItem('Settings', '9', <SettingOutlined />),
];

const avatars = [
  'https://xsgames.co/randomusers/avatar.php?g=pixel',
  'https://robohash.org/stefan-one',
  'https://robohash.org/stefan-two',
  'https://robohash.org/stefan-three',
  'https://avatars.dicebear.com/api/open-peeps/stefan.svg',
  'https://avatars.dicebear.com/api/croodles/stefan.svg',
];

const ProfilePage = ({ data }) => {
  console.log('Data:', data);

  if (!data) {
    return (
      <div className={style.loading_card}>
        <div className={style.loading_card_1}></div>
        <div className={style.right}>
          <div className={style.loading_card_2}></div>
          <div className={style.loading_card_3}></div>
          <div className={style.loading_card_3}></div>
          <div className={style.loading_card_3}></div>
          <div className={style.loading_card_3}></div>
          <div className={style.bottom}>
            <div className={style.loading_card_4}></div>
            <div className={style.loading_card_4}></div>
            <div className={style.loading_card_4}></div>
          </div>
        </div>
      </div>
    );
  }

  const [isEditing, setIsEditing] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState(
    'https://xsgames.co/randomusers/avatar.php?g=pixel'
  );
  const [title, setTitle] = useState(
    data && data.firstName && data.lastName
      ? `${data.firstName} ${data.lastName}`
      : ''
  );

  const [description, setDescription] = useState('Hello! This is me 👋🏼');
  const [selectedAvatar, setSelectedAvatar] = useState(avatarSrc);

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
    setAvatarSrc(avatarUrl);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const router = useRouter();

  useEffect(() => {
    // If user entered to profilr path to redirect user to sign in page
    const isLoggedIn = localStorage.getItem('accessToken');
    if (!isLoggedIn) {
      router.push('/auth/sign-in');
    }
  }, [router]);

  return (
    <div className={style.profile_page}>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items}
          />
        </Sider>

        <Layout
          style={{
            padding: '24px',
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <div className={style.content}>
              <Card
                style={{
                  width: 300,
                }}
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
                {isEditing ? (
                  <React.Fragment>
                    <Meta
                      title={
                        <Input value={title} onChange={handleTitleChange} />
                      }
                      description={
                        <Input
                          value={description}
                          onChange={handleDescriptionChange}
                        />
                      }
                    />
                    <div className={style.avatarsCollection}>
                      {avatars.map((avatarUrl) => (
                        <Avatar
                          key={avatarUrl}
                          src={avatarUrl}
                          size={64}
                          onClick={() => handleAvatarSelect(avatarUrl)}
                          className={`${style.avatar} ${
                            selectedAvatar === avatarUrl
                              ? style.selectedAvatar
                              : ''
                          }`}
                        />
                      ))}
                    </div>
                  </React.Fragment>
                ) : (
                  <Meta
                    avatar={<Avatar src={avatarSrc} className={style.avatar} />}
                    title={title}
                    description={description}
                  />
                )}
              </Card>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default ProfilePage;
