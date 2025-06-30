import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getIsLoggedIn} from "../../redux/auth/authSelectors";


const PrivateRoute = ({component: Component, redirectTo = '/'}) => {
	const isLoggedIn = useSelector(getIsLoggedIn);
	
	return (
		<>
			{isLoggedIn ? Component : <Navigate to={redirectTo}/>}
		</>
	);
}

export default PrivateRoute;