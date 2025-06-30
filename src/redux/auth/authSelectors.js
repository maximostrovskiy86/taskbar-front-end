export const getIsLoggedIn = state => {
	return state.auth.isLoggedIn;
}

export const getUserName = state => {
	return state.auth.user.userName;
}
export const getAccessToken = state => state.auth.accessToken;
export const getIsLoading = state => state.auth.isLoading;

