const AUTH_KEY = "isAuthenticated";

export const auth = {
  isAuthenticated: JSON.parse(localStorage.getItem(AUTH_KEY)) || false,

  login(cb) {
    auth.isAuthenticated = true;
    localStorage.setItem(AUTH_KEY, true);
    setTimeout(cb, 100); // simulate async
  },

  logout(cb) {
    auth.isAuthenticated = false;
    localStorage.removeItem(AUTH_KEY);
    setTimeout(cb, 100);
  },
};
