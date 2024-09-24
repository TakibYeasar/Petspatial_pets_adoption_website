import React, { useState } from 'react';

const SystemSettings = () => {
  // State for system settings
  const [settings, setSettings] = useState({
    systemName: 'Adoption System',
    maintenanceMode: false,
    featureFlag: {
      newDashboard: true,
      betaFeatures: false,
    },
  });

  // Handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle toggle switches (like maintenance mode, feature flags)
  const handleToggleChange = (e) => {
    const { name, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // Save system settings
  const handleSaveSettings = () => {
    // Logic to save the settings to the server or database
    console.log('Settings saved:', settings);
  };

  return (
    <div className="p-5 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-5">System Settings</h1>

      {/* System Name */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          System Name
        </label>
        <input
          type="text"
          name="systemName"
          value={settings.systemName}
          onChange={handleInputChange}
          className="border px-4 py-2 rounded w-full"
        />
      </div>

      {/* Maintenance Mode */}
      <div className="mb-4 flex items-center">
        <label className="block text-gray-700 font-semibold mr-4">
          Maintenance Mode
        </label>
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              name="maintenanceMode"
              checked={settings.maintenanceMode}
              onChange={handleToggleChange}
              className="sr-only"
            />
            <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
            <div
              className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${settings.maintenanceMode ? 'translate-x-6 bg-red-500' : 'bg-green-500'
                }`}
            ></div>
          </div>
          <span className="ml-3 text-sm">
            {settings.maintenanceMode ? 'Enabled' : 'Disabled'}
          </span>
        </label>
      </div>

      {/* Feature Flags */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Feature Flags</h2>
        <div className="flex items-center mb-4">
          <label className="text-gray-700 mr-4">New Dashboard</label>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="featureFlag.newDashboard"
              checked={settings.featureFlag.newDashboard}
              onChange={() =>
                setSettings((prev) => ({
                  ...prev,
                  featureFlag: {
                    ...prev.featureFlag,
                    newDashboard: !prev.featureFlag.newDashboard,
                  },
                }))
              }
              className="sr-only"
            />
            <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
            <div
              className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${settings.featureFlag.newDashboard
                  ? 'translate-x-6 bg-green-500'
                  : 'bg-red-500'
                }`}
            ></div>
          </label>
        </div>

        <div className="flex items-center">
          <label className="text-gray-700 mr-4">Beta Features</label>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="featureFlag.betaFeatures"
              checked={settings.featureFlag.betaFeatures}
              onChange={() =>
                setSettings((prev) => ({
                  ...prev,
                  featureFlag: {
                    ...prev.featureFlag,
                    betaFeatures: !prev.featureFlag.betaFeatures,
                  },
                }))
              }
              className="sr-only"
            />
            <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
            <div
              className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${settings.featureFlag.betaFeatures
                  ? 'translate-x-6 bg-green-500'
                  : 'bg-red-500'
                }`}
            ></div>
          </label>
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSaveSettings}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save Settings
      </button>
    </div>
  );
};

export default SystemSettings;
