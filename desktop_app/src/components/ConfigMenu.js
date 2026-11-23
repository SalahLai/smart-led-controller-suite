import React, { useState } from 'react';
import './Menu.css';

function ConfigMenu({ onDeviceConfigured, deviceType, setDeviceType }) {
  const [espStatus, setEspStatus] = useState('Not detected');
  const [subType, setSubType] = useState('RGB');

  return (
    <div className="menu config-menu">
      <div className="title">Device Configuration</div>
      <div className="device-types">
        <button
          className={deviceType === 'analog' ? 'selected' : ''}
          onClick={() => setDeviceType('analog')}
        >
          Analog LED Strip
        </button>
        <button
          className={deviceType === 'addressable' ? 'selected' : ''}
          onClick={() => setDeviceType('addressable')}
        >
          Addressable LED
        </button>
        <button
          className={deviceType === 'ring' ? 'selected' : ''}
          onClick={() => setDeviceType('ring')}
        >
          Ring Light (Relay)
        </button>
      </div>
      <div className="device-options">
        {deviceType === 'analog' && (
          <>
            <div>
              Type:
              <select value={subType} onChange={e => setSubType(e.target.value)}>
                <option value="RGB">RGB</option>
                <option value="WRGB">WRGB</option>
              </select>
            </div>
            <div>Pin Selectors: [ R ] [ G ] [ B ] {subType === 'WRGB' && '[ W ]'}</div>
          </>
        )}
        {deviceType === 'addressable' && (
          <>
            <div>Pin Selector: [ Data Pin ]</div>
            <div>LED Count: <input type="number" min={1} defaultValue={60} /></div>
          </>
        )}
        {deviceType === 'ring' && (
          <>
            <div>Pin Selectors: [ Bulb 1 ] [ Bulb 2 ] [ Bulb 3 ] [ Bulb 4 ]</div>
          </>
        )}
      </div>
      <div className="esp-status">
        ESP32: <span>{espStatus}</span>
        <button>Scan Again</button>
        <button>Manual IP</button>
      </div>
      <button className="primary-btn" onClick={onDeviceConfigured}>
        Save & Continue
      </button>
    </div>
  );
}

export default ConfigMenu;
