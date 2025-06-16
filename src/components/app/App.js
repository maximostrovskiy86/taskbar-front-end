import {useSelector, useDispatch} from "react-redux";
import Header from '../header/Header';
import Dashboard from "../../pages/dashboard/Dashboard";
import Landing from "../../pages/landing";
import {getIsLoggedIn} from "../../redux/auth/authSelectors";
// import {UserMenu} from "../UserMenu";


function App() {

	const iLoggedIn = useSelector(getIsLoggedIn)
	console.log("getIsLoggedIn", iLoggedIn)
	
	return (
		<>
			{/*<UserMenu/>*/}
			{iLoggedIn ?
				<>
					<Header/>
					<Dashboard/>
				</>
				:
				<Landing/>
			}
		</>
	);
}

export default App;
