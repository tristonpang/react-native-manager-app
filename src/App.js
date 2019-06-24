import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
    componentDidMount() {
        const firebaseConfig = {
            apiKey: 'AIzaSyDMbR81AD_8Z7nKD_FHl0fhmTDLLO8RHPc',
            authDomain: 'manager-fd035.firebaseapp.com',
            databaseURL: 'https://manager-fd035.firebaseio.com',
            projectId: 'manager-fd035',
            storageBucket: '',
            messagingSenderId: '733997537923',
            appId: '1:733997537923:web:3b96dfb1b7a1e5bb'
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        //second argument (currently an empty object) is for prepopulating the state
        //third argument - store enhancer -> adds additional functionality to the store

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
