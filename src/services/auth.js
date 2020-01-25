const AUTH_KEY = 'token';

const AuthService = {
  getToken: () => localStorage.getItem(AUTH_KEY),
  saveToken: token => localStorage.setItem(AUTH_KEY, token),
  removeToken: () => localStorage.removeItem(AUTH_KEY)
};

export { AuthService };
