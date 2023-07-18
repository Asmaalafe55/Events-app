import { useRouter } from 'next/router';
import { useEffect } from 'react';
import React from 'react';
import style from './Profile.module.scss';
import { Layout, Menu, theme } from 'antd';
import {
  SettingOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';

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
            Content
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default ProfilePage;
