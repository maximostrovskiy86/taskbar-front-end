import { createContext, useContext, useState } from "react";

const UserContext = createContext();

console.log("UserContext", UserContext);
export const useUser = () => useContext(UserContext);

console.log("useUser", useUser);

export const UserProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [username, setUsername] = useState(null);
	
	const logIn = () => {
		setIsLoggedIn(true);
		setUsername("Mango");
	};
	
	const logOut = () => {
		setIsLoggedIn(false);
		setUsername(null);
	};
	
	return (
		<UserContext.Provider value={{ isLoggedIn, username, logIn, logOut }}>
			{children}
		</UserContext.Provider>
	);
};