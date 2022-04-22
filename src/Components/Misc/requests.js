import axios from 'axios';
import { getTheme, setAuth, getAuth, setUser } from './localStorage';
import { successPopup, errorPopup } from './toasts';

const sendLoginReq = async (body) => {
  try {
    const response = await axios.post('/api/auth/login', body);
    setAuth(response.data.encodedToken);
    setUser(response.data.foundUser);
    successPopup('Logged In successfully!', getTheme());
    return response.data.encodedToken;
  } catch (err) {
    err.response.status === 401
      ? errorPopup('Authorization denied! Wrong credentials.', getTheme())
      : errorPopup('No such user exists!', getTheme());
  }
};

const sendSignupReq = async (body) => {
  try {
    const response = await axios.post('/api/auth/signup', body);
    setAuth(response.data.encodedToken);
    setUser(response.data.createdUser);
    successPopup('Signed Up successfully!', getTheme());
    return response.data.encodedToken;
  } catch (err) {
    if (err.response.status === 422) {
      errorPopup('User already exists!', getTheme());
    }
  }
};

const addVideoToWatchLater = async (body) => {
  const config = {
    headers: {
      authorization: getAuth(),
    },
  };
  try {
    const response = await axios.post('/api/user/watchlater', body, config);
    successPopup('Video added to watchlater!', getTheme());
    return response.data.watchlater;
  } catch (err) {
    if (err.response.status === 404) {
      errorPopup('No such user exists!', getTheme());
    } else {
      errorPopup('video already exists in watchlater!', getTheme());
    }
  }
};

const removeFromWatchLater = async (id) => {
  const config = {
    headers: {
      authorization: getAuth(),
    },
  };
  try {
    const response = await axios.delete(`/api/user/watchlater/${id}`, config);
    successPopup('Video removed from watchlater!', getTheme());
    return response.data.watchlater;
  } catch (err) {
    errorPopup('No such user exists!', getTheme());
  }
};

const addToLiked = async (body) => {
  const config = {
    headers: {
      authorization: getAuth(),
    },
  };
  try {
    const response = await axios.post('/api/user/likes', body, config);
    successPopup('Video added to liked videos!', getTheme());
    return response.data.likes;
  } catch (err) {
    if (err.response.status === 404) {
      errorPopup('No such user exists!', getTheme());
    } else {
      errorPopup('video already exists in liked videos!', getTheme());
    }
  }
};

const removeFromLiked = async (id) => {
  const config = {
    headers: {
      authorization: getAuth(),
    },
  };
  try {
    const response = await axios.delete(`/api/user/likes/${id}`, config);
    successPopup('Video removed from liked videos!', getTheme());
    return response.data.likes;
  } catch (err) {
    errorPopup('No such user exists!', getTheme());
  }
};

const addToHistory = async (body) => {
  const config = {
    headers: {
      authorization: getAuth(),
    },
  };
  try {
    const response = await axios.post('/api/user/history', body, config);
    return response.data.history;
  } catch (err) {
    return;
  }
};

const removeFromHistory = async (id) => {
  const config = {
    headers: {
      authorization: getAuth(),
    },
  };
  try {
    const response = await axios.delete(`/api/user/history/${id}`, config);
    successPopup('Video removed from history!', getTheme());
    return response.data.history;
  } catch (err) {
    errorPopup('No such user exists!', getTheme());
  }
};

const createPlaylist = async (body) => {
  const config = {
    headers: {
      authorization: getAuth(),
    },
  };
  try {
    const response = await axios.post(`/api/user/playlists`, body, config);
    successPopup(`Created a new playlist ${body.playlist.title}`);
    return response.data.playlists;
  } catch (err) {
    errorPopup('No such user exists!', getTheme());
  }
};

const deletePlaylist = async (id, title) => {
  const config = {
    headers: {
      authorization: getAuth(),
    },
  };
  try {
    const response = await axios.delete(`/api/user/playlists/${id}`, config);
    successPopup(`Playlist ${title} deleted successfully!`, getTheme());
    return response.data.playlists;
  } catch (err) {
    errorPopup('No such user exists!', getTheme());
  }
};

const addToPlaylist = async (body, id) => {
  const config = {
    headers: {
      authorization: getAuth(),
    },
  };
  try {
    const response = await axios.post(
      `/api/user/playlists/${id}`,
      body,
      config
    );
    successPopup(`Video added to playlist successfully!`, getTheme());
    return response.data.playlist;
  } catch (err) {
    if (err.response.status === 404) {
      errorPopup('No such user exists!', getTheme());
    } else {
      errorPopup('video already exists in the playlist!', getTheme());
    }
  }
};

const deleteFromPlaylist = async (playlistId, videoId) => {
  const config = {
    headers: {
      authorization: getAuth(),
    },
  };
  try {
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      config
    );
    successPopup(`Video deleted from playlist successfully!`, getTheme());
    return response.data.playlist;
  } catch (err) {
    errorPopup('No such user exists!', getTheme());
  }
};

const getPlaylists = async () => {
  const config = {
    headers: {
      authorization: getAuth(),
    },
  };
  try {
    const response = await axios.get(`/api/user/playlists`, config);
    return response.data.playlists;
  } catch (err) {
    errorPopup('No such user exists!', getTheme());
  }
};

export {
  sendLoginReq,
  sendSignupReq,
  addVideoToWatchLater,
  removeFromWatchLater,
  addToLiked,
  removeFromLiked,
  addToHistory,
  removeFromHistory,
  createPlaylist,
  deletePlaylist,
  addToPlaylist,
  deleteFromPlaylist,
  getPlaylists,
};
