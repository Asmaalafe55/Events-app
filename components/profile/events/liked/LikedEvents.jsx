import React, { useEffect, useState } from 'react';
import axios from '../../../../utils/axios';
import style from './LikedEvents.module.scss';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { List, Space } from 'antd';

const LikedEvents = ({ data }) => {
  const [userData, setUserData] = useState([]);

  console.log('111', userData);

  useEffect(() => {
    const fetchLikedEvents = async () => {
      if (!data) {
        console.error('Invalid user data:', data);
        return;
      }
      try {
        const userId = data._id;
        const res = await axios.get(`/likes/${userId}`);
        setUserData(res.data);
      } catch (error) {
        console.error('Error fetching liked events:', error);
      }
    };

    fetchLikedEvents();
  }, [data]);

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={userData} // Use userData instead of data
      footer={
        <div>
          <b>Liked Events</b> footer part
        </div>
      }
      renderItem={(item) => (
        <List.Item
          key={item._id}
          actions={[
            <IconText
              icon={StarOutlined}
              text="156"
              key="list-vertical-star-o"
            />,
            <IconText
              icon={LikeOutlined}
              text={item.eventId}
              key="list-vertical-like-o"
            />,
            <IconText
              icon={MessageOutlined}
              text="2"
              key="list-vertical-message"
            />,
          ]}
        >
          <List.Item.Meta
            title={
              <a href={`/events/${item.eventId._id}`}>{item.eventId.title}</a>
            }
            description={item.eventId.description}
          />
          {item.eventId.content}
        </List.Item>
      )}
    />
  );
};

export default LikedEvents;
