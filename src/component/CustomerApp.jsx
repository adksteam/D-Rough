import React, { Component } from 'react';
import ListCustomerComponent from './ListCustomerComponent';
import './ListCustomerComponent.css';
import Button from '@material-ui/core/Button';
class CustomerApp extends Component {
    render() {
        return ( <>
        <div className="container">
            <ul>
                <li style={{marginTop:'15px',float:'left'}}><Button size="large" variant="contained" color="secondary" >ADD</Button></li>
                <li  style={{fontSize:'40px', textAlign:'center'}}>Customer Application</li>
                <li style={{marginTop:'15px',float:'right'}}><Button size="large" variant="contained" color="secondary" >LOGOUT</Button></li>         
            </ul>
            <ListCustomerComponent />
            </div>
            </>
        );
    }
}

export default CustomerApp