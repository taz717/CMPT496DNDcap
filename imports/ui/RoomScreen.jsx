import React from 'react';

export const RoomScreen = ({ match }) => {
  const { roomId } = match.params;

  return (
    <div>
      <p>You've joined room {roomId}</p>
    </div>
  );
};
