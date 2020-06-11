import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './store/store';


const jsx=(
   <Provider store={store}>
       <App />
   </Provider>
);
        
console.log(store.getState());
ReactDOM.render(jsx, document.getElementById('root'));
serviceWorker.unregister();

