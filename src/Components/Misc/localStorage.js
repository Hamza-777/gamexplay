const setAuth = (data) => {
  localStorage.setItem('auth', data);
};

const getAuth = () => {
  return localStorage.getItem('auth') ? localStorage.getItem('auth') : null;
};

const removeAuth = () => {
  localStorage.removeItem('auth');
};

const setTheme = (data) => {
  localStorage.setItem('theme', data);
};

const getTheme = () => {
  return localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark';
};

export { setAuth, getAuth, removeAuth, setTheme, getTheme };
