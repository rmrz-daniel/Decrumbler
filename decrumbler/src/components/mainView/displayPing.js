import React from 'react';
import PingIp from "../ping/pingIp"

function DisplayPing() {
  const performPing = (ping) => {
    
  }
  return (
    <div className='buttons'>
      <PingIp onPingIp={performPing} />
    </div>
  );
}

export default DisplayPing;