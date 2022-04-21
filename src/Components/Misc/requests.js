import axios from 'axios';
import { setAuth, getAuth, setUser } from './localStorage';
import { successPopup, errorPopup } from './toasts';

const sendLoginReq = async (body) => {
  try {
    const response = await axios.post('/api/auth/login', body);
    setAuth(response.data.encodedToken);
    setUser(response.data.foundUser);
    successPopup('Logged In successfully!');
    return response.data.encodedToken;
  } catch (err) {
    err.response.status === 401
      ? errorPopup('Authorization denied! Wrong credentials.')
      : errorPopup('No such user exists!');
  }
};

const sendSignupReq = async (body) => {
  try {
    const response = await axios.post('/api/auth/signup', body);
    setAuth(response.data.encodedToken);
    setUser(response.data.createdUser);
    successPopup('Signed Up successfully!');
    return response.data.encodedToken;
  } catch (err) {
    if (err.response.status === 422) {
      errorPopup('User already exists!');
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
    successPopup('Video added to watchlater!');
    return response.data.watchlater;
  } catch (err) {
    if (err.response.status === 404) {
      errorPopup('No such user exists!');
    } else {
      errorPopup('video already exists in watchlater!');
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
    successPopup('Video removed from watchlater!');
    return response.data.watchlater;
  } catch (err) {
    errorPopup('No such user exists!');
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
    successPopup('Video added to liked videos!');
    return response.data.likes;
  } catch (err) {
    if (err.response.status === 404) {
      errorPopup('No such user exists!');
    } else {
      errorPopup('video already exists in liked videos!');
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
    successPopup('Video removed from liked videos!');
    return response.data.likes;
  } catch (err) {
    errorPopup('No such user exists!');
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
    if (err.response.status === 404) {
      errorPopup('No such user exists!');
    }
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
    successPopup('Video removed from history!');
    return response.data.history;
  } catch (err) {
    errorPopup('No such user exists!');
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
    errorPopup('No such user exists!');
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
    successPopup(`Playlist ${title} deleted successfully!`);
    return response.data.playlists;
  } catch (err) {
    errorPopup('No such user exists!');
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
    successPopup(`Video added to playlist successfully!`);
    return response.data.playlist;
  } catch (err) {
    if (err.response.status === 404) {
      errorPopup('No such user exists!');
    } else {
      errorPopup('video already exists in the playlist!');
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
    successPopup(`Video deleted from playlist successfully!`);
    return response.data.playlist;
  } catch (err) {
    errorPopup('No such user exists!');
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
};
