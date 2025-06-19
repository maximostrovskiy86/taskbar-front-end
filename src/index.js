import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from 'styled-components'
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import {theme} from "./theme";
import {persistor, store} from './redux/store';
import App from './components/app';
// import {UserProvider} from "./components/UserContext";


import "normalize.css";
import './index.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<ThemeProvider theme={theme}>
					{/*<UserProvider>*/}
						<App/>
					{/*</UserProvider>*/}
				</ThemeProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
