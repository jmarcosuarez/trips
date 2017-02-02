import React from 'react';

function Stream({ tracks = [] }) {
  return (
    <div>
      <h1>ola ke ase</h1>
      {
        tracks.map((track, key) => {
          return <div className="track" key={key}>{track.title}</div>;
        })
      }
    </div>
  );
}

export default Stream;
