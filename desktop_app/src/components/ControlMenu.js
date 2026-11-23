import React, { useState } from 'react';
import './Menu.css';

function ControlMenu({ onBack, deviceType }) {
  const [isOn, setIsOn] = useState(false);
  const [brightness, setBrightness] = useState(75);
  const [presets, setPresets] = useState([
    { color: '#ff0000', mode: 'breathing' },
    { color: '#00ff00', mode: 'fade' },
    { color: '#0000ff', mode: 'colorchange' },
  ]);
  const [musicSync, setMusicSync] = useState(false);

  return (
    <div className="menu control-menu">
      <div className="header">
        <span className="device-name">{deviceType ? deviceType.charAt(0).toUpperCase() + deviceType.slice(1) : 'Device'}</span>
        <span className="lamp-toggle" onClick={() => setIsOn(!isOn)}>
          <span role="img" aria-label="lamp">💡</span> {isOn ? 'On' : 'Off'}
        </span>
      </div>
      <div className="lamp-graphic">
        {/* Placeholder for animated lamp graphic */}
        <div className={`lamp-cord ${isOn ? 'on' : ''}`}></div>
      </div>
      <div className="brightness-control">
        <label>Brightness</label>
        <input
          type="range"
          min={0}
          max={100}
          value={brightness}
          onChange={e => setBrightness(Number(e.target.value))}
        />
        <span>{brightness}%</span>
      </div>
      <div className="presets">
        Presets:
        {presets.map((preset, i) => (
          <span key={i} className="preset-icon" style={{ background: preset.color }} title={preset.mode}></span>
        ))}
        <span className="preset-add">+</span>
      </div>
      <div className="modes">
        <button>Breathing</button>
        <button>Fade</button>
        <button>Color Change</button>
      </div>
      <div className="music-sync">
        <button onClick={() => setMusicSync(!musicSync)}>
          {musicSync ? '🎵 Music Sync: On' : '🎵 Music Sync: Off'}
        </button>
      </div>
      <button className="secondary-btn" onClick={onBack}>
        Back to Home
      </button>
    </div>
  );
}

export default ControlMenu;
