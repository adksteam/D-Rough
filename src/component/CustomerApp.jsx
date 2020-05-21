import React, { Component } from 'react';
import ListCustomerComponent from './ListCustomerComponent';
import './ListCustomerComponent.css';
class CustomerApp extends Component {
    render() {
        return ( <>
            <h1> Customer Application </h1>
            <ListCustomerComponent />
            </>
        );
    }
}

export default CustomerApp