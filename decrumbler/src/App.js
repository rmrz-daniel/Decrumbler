import React from 'react';
import PingIp from './components/ping/pingIp';
import WelcomePage from './components/welcomePage/welcomePage';

function App() {
  const performPing = (ping) => {
    
  }
  return (
    <div className='buttons'>
      <WelcomePage />
      <PingIp onPingIp={performPing} />
    </div>
  );
}

export default App;