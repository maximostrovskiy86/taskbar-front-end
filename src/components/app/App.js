import {useSelector} from "react-redux";
import {Routes, Route} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import Dashboard from "../../pages/dashboard/Dashboard";
import NotFoundPage from "../../pages/notFound";
import RegisterPage from "../../pages/registerPage";
import LoginPage from "../../pages/loginPage";
import LoadingSpinner from "../loadingSpinner";
import {getIsLoading, getIsLoggedIn} from "../../redux/auth/authSelectors";
import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "../routes/PublicRoute";
import Header from "../header";

// import {UserMenu} from "../UserMenu";

function App() {
	const isLoading = useSelector(getIsLoading);
	const isLoggedIn = useSelector(getIsLoggedIn);
	
	return (
		<>
			{isLoggedIn && <Header/>}
			{isLoading ? <LoadingSpinner/> :
				<Routes>
					{/*<UserMenu/>*/}
					<Route path="/"
						   element={<PrivateRoute redirectTo="/login" component={<Dashboard/>}/>}/>
					<Route path="/login"
						   element={<PublicRoute redirectTo="/dashboard" component={<LoginPage/>}/>}/>
					<Route path="/registration"
						   element={<PublicRoute redirectTo="/dashboard" component={<RegisterPage/>}/>}/>
					<Route path="/dashboard"
						   element={<PrivateRoute redirectTo="/login" component={<Dashboard/>}/>}
					/>
					<Route path="*" element={<NotFoundPage/>}/>
				</Routes>
			}
			<ToastContainer/>
		</>
	);
}

export default App;
