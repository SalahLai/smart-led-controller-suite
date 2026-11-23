import React, { useState } from 'react';
import HomeMenu from './components/HomeMenu';
import ConfigMenu from './components/ConfigMenu';
import ControlMenu from './components/ControlMenu';
import './App.css';

function App() {
  const [menu, setMenu] = useState('home');
  const [deviceType, setDeviceType] = useState(null);

  return (
    <div className="App">
      {menu === 'home' && <HomeMenu onStart={() => setMenu('config')} />}
      {menu === 'config' && (
        <ConfigMenu
          onDeviceConfigured={() => setMenu('control')}
          deviceType={deviceType}
          setDeviceType={setDeviceType}
        />
      )}
      {menu === 'control' && <ControlMenu onBack={() => setMenu('home')} deviceType={deviceType} />}
    </div>
  );
}

export default App;
