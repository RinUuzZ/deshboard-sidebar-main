import React from 'react';
import './Settings.css'; 

const Settings = () => {
  return (
    <div className="settings-box">
      <div className="settings-container">
        <div className="settings-item">MATERIAL</div>
        <div className="settings-item">GROUP MATERIAL</div>
        <div className="settings-item">MATERIAL CATEGORY I</div>
        <div className="settings-item">MATERIAL CATEGORY II</div>
        <div className="settings-item">UOM</div>
        <div className="settings-item">MEASUREMENT STANDARD</div>
        <div className="settings-item">COUNTRY</div>
        <div className="settings-item">STATE</div>
        <div className="settings-item">LOCATION</div>
      </div>
    </div>
  );
};

export default Settings;
