import React, { useState } from "react";
import "./settings.css";

const Settings = () => {
  // State untuk mengelola pengaturan saat ini
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [fontSize, setFontSize] = useState(16);
  const [borderEnabled, setBorderEnabled] = useState(false);

  // State untuk menyimpan pengaturan default
  const defaultSettings = {
    backgroundColor: "#ffffff",
    fontSize: 16,
    borderEnabled: false,
  };

  // Fungsi Apply: menerapkan perubahan ke body
  const applySettings = () => {
    document.body.style.backgroundColor = backgroundColor;
    document.documentElement.style.setProperty("--global-font-size", `${fontSize}px`);
    document.body.style.border = borderEnabled ? "5px solid #000" : "none";
  };

  // Fungsi Reset: mengembalikan pengaturan ke default
  const resetSettings = () => {
    setBackgroundColor(defaultSettings.backgroundColor);
    setFontSize(defaultSettings.fontSize);
    setBorderEnabled(defaultSettings.borderEnabled);

    // Menerapkan pengaturan default
    document.body.style.backgroundColor = defaultSettings.backgroundColor;
    document.documentElement.style.setProperty("--global-font-size", `${defaultSettings.fontSize}px`);
    document.body.style.border = defaultSettings.borderEnabled ? "5px solid #000" : "none";
  };

  return (
    <div className="settings-card">
      <h1>Settings</h1>

      <div className="setting-item">
        <label htmlFor="colorPicker">Background Color:</label>
        <input
          type="color"
          id="colorPicker"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </div>

      <div className="setting-item">
        <label htmlFor="fontSize">Font Size:</label>
        <input
          type="range"
          id="fontSize"
          min="12"
          max="32"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
        />
        <span>{fontSize}px</span>
      </div>

      <div className="setting-item">
        <label htmlFor="borderToggle">Enable Border:</label>
        <input
          type="checkbox"
          id="borderToggle"
          checked={borderEnabled}
          onChange={() => setBorderEnabled(!borderEnabled)}
        />
      </div>

      {/* Tombol Apply dan Reset */}
      <div className="button-group">
        <button onClick={applySettings} className="apply-btn">Apply</button>
        <button onClick={resetSettings} className="reset-btn">Reset</button>
      </div>
    </div>
  );
};

export default Settings;
