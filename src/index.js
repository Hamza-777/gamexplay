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
import { PlaylistsProvider } from './Components/Providers/PlaylistsProvider';
import { ModalProvider } from './Components/Providers/ModalProvider';
import { ThemeProvider } from './Components/Providers/ThemeProvider';
import { CommentProvider } from './Components/Providers/CommentProvider';

// Call make Server
makeServer();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <CommentProvider>
          <ModalProvider>
            <PlaylistsProvider>
              <HistoryProvider>
                <LikedProvider>
                  <WatchLaterProvider>
                    <VideoProvider>
                      <App />
                    </VideoProvider>
                  </WatchLaterProvider>
                </LikedProvider>
              </HistoryProvider>
            </PlaylistsProvider>
          </ModalProvider>
        </CommentProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
