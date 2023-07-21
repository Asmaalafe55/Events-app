import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import React from 'react';
import style from './Profile.module.scss';
import { Layout, Menu, theme, Input, Avatar, Card } from 'antd';
import {
  SettingOutlined,
  PieChartOutlined,
  UserOutlined,
  EditOutlined,
  EllipsisOutlined,
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

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState(
    'https://xsgames.co/randomusers/avatar.php?g=pixel'
  );
  const [title, setTitle] = useState('Card title');
  const [description, setDescription] = useState('This is the description');

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleAvatarChange = (e) => {
    setAvatarSrc(e.target.value);
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
  const router = useRouter();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('accessToken');
    console.log(isLoggedIn);

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
                      avatar={
                        <input
                          type="text"
                          value={avatarSrc}
                          onChange={handleAvatarChange}
                        />
                      }
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
                  </React.Fragment>
                ) : (
                  <Meta
                    avatar={<Avatar src={avatarSrc} />}
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
