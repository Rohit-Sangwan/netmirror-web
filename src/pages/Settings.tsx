import React from 'react';
import { Link } from 'react-router-dom';

export const Settings = () => {
  return (
    <div className="min-h-screen bg-background pt-16 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-on-background mb-6">Settings</h1>
        
        <div className="space-y-4">
          {/* Account Settings */}
          <section className="bg-surface rounded-lg p-4">
            <h2 className="text-lg font-semibold text-on-surface mb-4">Account</h2>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-3 rounded-lg bg-surface-variant text-on-surface-variant hover:bg-surface-variant/80 active:bg-surface-variant/60 transition-colors">
                Edit Profile
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg bg-surface-variant text-on-surface-variant hover:bg-surface-variant/80 active:bg-surface-variant/60 transition-colors">
                Change Password
              </button>
            </div>
          </section>

          {/* App Settings */}
          <section className="bg-surface rounded-lg p-4">
            <h2 className="text-lg font-semibold text-on-surface mb-4">App Settings</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-on-surface">Dark Mode</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-on-surface">Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </section>

          {/* Legal */}
          <section className="bg-surface rounded-lg p-4">
            <h2 className="text-lg font-semibold text-on-surface mb-4">Legal</h2>
            <div className="space-y-2">
              <Link
                to="/privacy-policy"
                className="block w-full text-left px-4 py-3 rounded-lg bg-surface-variant text-on-surface-variant hover:bg-surface-variant/80 active:bg-surface-variant/60 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="block w-full text-left px-4 py-3 rounded-lg bg-surface-variant text-on-surface-variant hover:bg-surface-variant/80 active:bg-surface-variant/60 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </section>

          {/* About */}
          <section className="bg-surface rounded-lg p-4">
            <h2 className="text-lg font-semibold text-on-surface mb-4">About</h2>
            <div className="space-y-2">
              <div className="px-4 py-3 text-on-surface">
                <p className="text-sm">Version 1.0.0</p>
                <p className="text-sm text-on-surface/60">© 2024 NetMirror. All rights reserved.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}; 