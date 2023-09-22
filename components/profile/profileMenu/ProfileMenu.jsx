import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  PieChartOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const ProfileMenu = () => {
  return (
    <Sider width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
      >
        <Menu.Item key="1" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
        <Menu.SubMenu key="sub1" icon={<PieChartOutlined />} title="Events">
          <Menu.Item key="3">Liked</Menu.Item>
          <Menu.Item key="4">Registered</Menu.Item>
          <Menu.Item key="5">Expired</Menu.Item>
          <Menu.Item key="6">Canceled</Menu.Item>
          <Menu.Item key="7">Deleted</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="9" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default ProfileMenu;
