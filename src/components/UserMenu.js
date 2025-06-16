import { useUser } from "./UserContext";
import {useState} from "react";

export const UserMenu = () => {
	const { isLoggedIn, username, logIn, logOut } = useUser();
	
	return (
		<div>
			{isLoggedIn && <p>{username}</p>}
			{isLoggedIn ? (
				<button onClick={logOut}>Log out</button>
			) : (
				<button onClick={logIn}>Log in</button>
			)}
		</div>
	);
};
