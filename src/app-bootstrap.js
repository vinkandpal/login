import React from 'react';
import ReactDOM from 'react-dom';

import StoreProvider from "./store/store";

import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './app/styles/App.scss'; 

class AppBootstrap {

    init() {
        this.renderView()
    }

    renderView() {
        ReactDOM.render(
        	<StoreProvider>
        		<App route='signIn' />
        	</StoreProvider>,
        	document.getElementById('root'))
    }
}

export default AppBootstrap