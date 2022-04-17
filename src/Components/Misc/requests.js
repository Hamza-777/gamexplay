import axios from 'axios';
import { setAuth, setUser } from './localStorage';
import {
  logInSuccess,
  notFound,
  SignUpSuccess,
  unauthorized,
  userExists,
} from './toasts';

const sendLoginReq = async (body) => {
  try {
    const response = await axios.post('/api/auth/login', body);
    setAuth(response.data.encodedToken);
    setUser(response.data.foundUser);
    logInSuccess();
    return response.data.encodedToken;
  } catch (err) {
    err.response.status === 401 ? unauthorized() : notFound();
  }
};

const sendSignupReq = async (body) => {
  try {
    const response = await axios.post('/api/auth/signup', body);
    setAuth(response.data.encodedToken);
    setUser(response.data.createdUser);
    SignUpSuccess();
    console.log(response);
    return response.data.encodedToken;
  } catch (err) {
    if (err.response.status === 422) {
      userExists();
    }
  }
};

export { sendLoginReq, sendSignupReq };