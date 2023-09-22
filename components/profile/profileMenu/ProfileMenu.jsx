import React from 'react';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const ProfileMenu = () => {
  return (
    <Sider width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
      >
        {/* ... */}
      </Menu>
    </Sider>
  );
};

export default ProfileMenu;
