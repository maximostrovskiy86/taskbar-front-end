import {useSelector, useDispatch} from "react-redux";
import Header from '../header/Header';
import Dashboard from "../../pages/dashboard/Dashboard";
import Landing from "../../pages/landing";
import {getIsLoggedIn} from "../../redux/auth/authSelectors";

function App() {

	const iLoggedIn = useSelector(getIsLoggedIn)
	console.log("getIsLoggedIn", iLoggedIn)
	
	return (
		<>
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
