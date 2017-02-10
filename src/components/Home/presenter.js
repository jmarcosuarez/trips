import React from 'react';

function Home({ tracks = [] }) {
  return (
    <div>s
      {
        tracks.map((track, key) => {
          return <div className="track" key={key}>{track.title}</div>;
        })
      }
    </div>
  );
}

export default Home;
