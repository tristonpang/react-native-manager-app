import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
