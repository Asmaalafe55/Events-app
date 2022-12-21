import React from 'react';

const Event = () => {
  return (
    <div>
      <h1>Our single event</h1>
    </div>
  );
};

export default Event;

export async function getStaticPaths() {
  const data = await import('/data/data.json');
  const allEvents = data;
  console.log(data);
  const allPaths = allEvents.map((path) => {
    return {
      params: {
        category: path.city,
        event: path.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}
