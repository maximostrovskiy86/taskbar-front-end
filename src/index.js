import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from 'styled-components'
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import {theme} from "./theme";
import "normalize.css";
import './index.css';
import {persistor, store} from './redux/store';
import App from './components/app';
// import {UserProvider} from "./components/UserContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store} stabilityCheck="never">
			<PersistGate persistor={persistor}>
				<BrowserRouter>
					<ThemeProvider theme={theme}>
						{/*<UserProvider>*/}
							<App/>
						{/*</UserProvider>*/}
					</ThemeProvider>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
