import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RippleEffect } from '../components/RippleEffect';
import { Snackbar } from '../components/Snackbar';

interface SettingSection {
  title: string;
  description: string;
  options: {
    id: string;
    label: string;
    type: 'toggle' | 'select' | 'slider';
    value: any;
    options?: { value: string; label: string }[];
  }[];
}

const settings: SettingSection[] = [
  {
    title: 'Appearance',
    description: 'Customize the look and feel of the app',
    options: [
      {
        id: 'theme',
        label: 'Theme',
        type: 'select',
        value: 'dark',
        options: [
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' },
          { value: 'system', label: 'System' },
        ],
      },
      {
        id: 'animations',
        label: 'Enable Animations',
        type: 'toggle',
        value: true,
      },
    ],
  },
  {
    title: 'Notifications',
    description: 'Manage your notification preferences',
    options: [
      {
        id: 'push',
        label: 'Push Notifications',
        type: 'toggle',
        value: true,
      },
      {
        id: 'email',
        label: 'Email Notifications',
        type: 'toggle',
        value: false,
      },
    ],
  },
  {
    title: 'Playback',
    description: 'Configure video playback settings',
    options: [
      {
        id: 'quality',
        label: 'Default Quality',
        type: 'select',
        value: 'auto',
        options: [
          { value: 'auto', label: 'Auto' },
          { value: '1080p', label: '1080p' },
          { value: '720p', label: '720p' },
          { value: '480p', label: '480p' },
        ],
      },
      {
        id: 'autoplay',
        label: 'Autoplay Next Episode',
        type: 'toggle',
        value: true,
      },
    ],
  },
  {
    title: 'Parental Controls',
    description: 'Set up content restrictions',
    options: [
      {
        id: 'rating',
        label: 'Maximum Rating',
        type: 'select',
        value: 'pg13',
        options: [
          { value: 'g', label: 'G' },
          { value: 'pg', label: 'PG' },
          { value: 'pg13', label: 'PG-13' },
          { value: 'r', label: 'R' },
        ],
      },
      {
        id: 'pin',
        label: 'Require PIN for Mature Content',
        type: 'toggle',
        value: false,
      },
    ],
  },
];

const SettingsPage: React.FC = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSettingChange = (sectionId: string, optionId: string, value: any) => {
    setSnackbarMessage('Settings updated');
    setShowSnackbar(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-900 p-4"
    >
      <h1 className="text-2xl font-bold text-white mb-6">Settings</h1>

      <div className="space-y-8">
        {settings.map((section) => (
          <div key={section.title} className="bg-gray-800 rounded-lg p-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-white">{section.title}</h2>
              <p className="text-gray-400">{section.description}</p>
            </div>

            <div className="space-y-4">
              {section.options.map((option) => (
                <div
                  key={option.id}
                  className="flex items-center justify-between py-2"
                >
                  <label className="text-white">{option.label}</label>
                  <div className="flex items-center">
                    {option.type === 'toggle' && (
                      <RippleEffect>
                        <button
                          onClick={() =>
                            handleSettingChange(section.title, option.id, !option.value)
                          }
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            option.value ? 'bg-primary-600' : 'bg-gray-600'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              option.value ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </RippleEffect>
                    )}

                    {option.type === 'select' && (
                      <select
                        value={option.value}
                        onChange={(e) =>
                          handleSettingChange(section.title, option.id, e.target.value)
                        }
                        className="bg-gray-700 text-white px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        {option.options?.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    )}

                    {option.type === 'slider' && (
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={option.value}
                        onChange={(e) =>
                          handleSettingChange(
                            section.title,
                            option.id,
                            parseInt(e.target.value)
                          )
                        }
                        className="w-32"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Snackbar
        message={snackbarMessage}
        isVisible={showSnackbar}
        onClose={() => setShowSnackbar(false)}
      />
    </motion.div>
  );
};

export default SettingsPage; 