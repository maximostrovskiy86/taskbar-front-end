import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from 'styled-components'
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import {theme} from "./theme";
import {persistor, store} from './redux/store';
import './index.css';
import App from './components/app';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<ThemeProvider theme={theme}>
					<App/>
				</ThemeProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
