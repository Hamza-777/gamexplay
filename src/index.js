import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { VideoProvider } from './Components/Providers/VideoProvider';
import { AuthProvider } from './Components/Providers/AuthProvider';

// Call make Server
makeServer();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <VideoProvider>
        <App />
      </VideoProvider>
    </AuthProvider>
  </React.StrictMode>
);
