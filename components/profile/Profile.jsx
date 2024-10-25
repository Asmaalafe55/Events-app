import React, { useEffect, useState } from 'react';
import { Layout, theme } from 'antd';
import { useRouter } from 'next/router';
import ProfileCard from './profileCard/ProfileCard';
import LikedEvents from './events/liked/LikedEvents';
import RegisteredEvents from './events/registered/RegisteredEvents';
import ExpiredEvents from './events/expired/ExpiredEvents';
import Setting from './settings/Setting';
import ProfileMenu from './profileMenu/ProfileMenu';
import style from './Profile.module.scss';

const { Content, Sider } = Layout;

const Profile = ({ data }) => {
  const [name, setName] = useState(
    data ? `${data.firstName} ${data.lastName}` : ''
  );
  const [description, setDescription] = useState('Hello! This is me 👋🏼');
  const [selectedKey, setSelectedKey] = useState('1');

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

  const renderContent = () => {
    switch (selectedKey) {
      case '1':
        return <ProfileCard title={name} description={description} />;
      case '3':
        return <LikedEvents data={data} />;
      case '4':
        return <RegisteredEvents data={data} />;
      case '5':
        return <ExpiredEvents data={data} />;

      case '9':
        return <Setting data={data} />;
      // Add cases for other keys and corresponding components here
      default:
        return <ProfileCard />;
    }
  };

  return (
    <div className={style.profile_page}>
      <Layout className={style.layout}>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <ProfileMenu onMenuSelect={setSelectedKey} />
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
            <div className={style.content}>{renderContent()}</div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Profile;
