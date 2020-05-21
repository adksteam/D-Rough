import React, { Component } from 'react';
import { BrowserRouter as Router , Route }  from 'react-router-dom';
import './App.css';
import CustomerApp from './component/CustomerApp';

class App extends Component {
    render() {
        return (
            <CustomerApp/>
        );
    }
}

export default App;
