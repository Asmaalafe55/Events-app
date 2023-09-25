import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  PieChartOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const ProfileMenu = () => {
  const items = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'Profile',
    },
    {
      key: 'sub1',
      icon: <PieChartOutlined />,
      label: 'Events',
      children: [
        { key: '3', label: 'Liked' },
        { key: '4', label: 'Registered' },
        { key: '5', label: 'Expired' },
        { key: '6', label: 'Canceled' },
        { key: '7', label: 'Deleted' },
      ],
    },
    {
      key: '9',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
  ];

  return (
    <Sider width={200}>
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
  );
};

export default ProfileMenu;
