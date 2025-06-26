import {useSelector, useDispatch} from "react-redux";
import {Routes, Route} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import Dashboard from "../../pages/dashboard/Dashboard";
import RegisterPage from "../../pages/registerPage";
import LoginPage from "../../pages/loginPage";
import LoadingSpinner from "../loadingSpinner";
import {getIsLoggedIn, getIsLoading} from "../../redux/auth/authSelectors";
import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "../routes/PublicRoute";

// import {UserMenu} from "../UserMenu";


function App() {
	const isLoading = useSelector(getIsLoading);
	const iLoggedIn = useSelector(getIsLoggedIn)
	console.log("getIsLoggedIn", iLoggedIn)
	
	return (
		<>
			{isLoading ? <LoadingSpinner/> :
				
				<Routes>
					<Route path="/">
						{/*<UserMenu/>*/}
						<Route index path="/login"
							   element={<PublicRoute redirectTo="/dashboard" component={<LoginPage/>}/>}/>
						<Route path="/registration"
							   element={<PublicRoute redirectTo="/dashboard" component={<RegisterPage/>}/>}/>
						<Route path="/dashboard"
							   element={<PrivateRoute redirectTo="/login" component={<Dashboard/>}/>}
						/>
					</Route>
				</Routes>
			}
			<ToastContainer/>
		</>
	);
}

export default App;
