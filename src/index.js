import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { VideoProvider } from './Components/Providers/VideoProvider';
import { AuthProvider } from './Components/Providers/AuthProvider';
import { WatchLaterProvider } from './Components/Providers/WatchLaterProvider';
import { LikedProvider } from './Components/Providers/LikedProvider';
import { HistoryProvider } from './Components/Providers/HistoryProvider';

// Call make Server
makeServer();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <HistoryProvider>
        <LikedProvider>
          <WatchLaterProvider>
            <VideoProvider>
              <App />
            </VideoProvider>
          </WatchLaterProvider>
        </LikedProvider>
      </HistoryProvider>
    </AuthProvider>
  </React.StrictMode>
);
