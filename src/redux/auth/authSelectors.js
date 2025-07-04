export const getIsLoggedIn = (state) => {
  return state.auth.isLoggedIn;
};
export const getUserName = (state) => {
  return state.auth.user.userName;
};
export const getAccessToken = (state) => {
  return state.auth.accessToken;
};
export const getIsLoading = (state) => {
  return state.auth.isLoading;
};
