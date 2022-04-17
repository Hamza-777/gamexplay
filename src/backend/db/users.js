import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have likes (Likes are set to 0 by default), History Array, Playlists Array (added Watch Later Playlist in it by default) by default
 * */

export const users = [
  {
    _id: 'guest',
    username: 'Guest',
    email: 'guest@gmail.com',
    password: 'guest123',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
