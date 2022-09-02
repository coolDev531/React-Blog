import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {legacy_createStore as createStore} from 'redux'
import reducerElement from './components/store/reducer';
const store=createStore(reducerElement)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(    
    <Provider store={store}>
        <App />
    </Provider>
);
