export const auth = {
    isAuthenticated: false,
    login(cb) {
        auth.isAuthenticated = true;
        setTimeout(cb, 100); // mimic async
    },
    logout(cb) {
        auth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};
