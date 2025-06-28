export const getIsLoggedIn = state => {
	return state.auth.isLoggedIn;
}

export const getUserName = state => state.auth.user.username;
export const getUserSid = state => state.auth.sid;
export const getAccessToken = state => state.auth.accessToken;
export const getIsLoading = state => state.auth.isLoading;

