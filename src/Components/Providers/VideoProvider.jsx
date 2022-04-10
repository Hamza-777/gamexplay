import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from 'react';
import axios from 'axios';

const videoContext = createContext(null);

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'GET_ALL':
      return {
        ...state,
        vids: payload.videos,
      };
    case 'GET_SINGLE':
      return {
        ...state,
        vids: payload.videos.filter((video) =>
          video._id.includes(payload.category)
        ),
      };
    default:
      return state;
  }
};

const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [videoState, dispatchVideo] = useReducer(reducer, {
    vids: [],
  });

  useEffect(() => {
    (async () => {
      const data = await axios.get('/api/videos');
      setVideos([...data.data.videos]);
    })();
  }, []);

  return (
    <videoContext.Provider value={{ videos, videoState, dispatchVideo }}>
      {children}
    </videoContext.Provider>
  );
};

const useVideo = () => useContext(videoContext);

export { VideoProvider, useVideo };
