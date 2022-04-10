import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const videoContext = createContext(null);

const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await axios.get('/api/videos');
      setVideos([...data.data.videos]);
    })();
  }, []);

  return (
    <videoContext.Provider value={{ videos, setVideos }}>
      {children}
    </videoContext.Provider>
  );
};

const useVideo = () => useContext(videoContext);

export { VideoProvider, useVideo };
