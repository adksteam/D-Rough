import React, { Component } from 'react';
import './ListCustomerComponent.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

class ListCustomerComponent extends Component {
    render() {
        return (
            <div className="container">
                <h3><u> All Customers </u></h3>
                <div className="container">
                    <table className="table" className="content-table">
                        <thead>
                            <tr>
                                <th>Customer ID</th>
                                <th>Customer First Name</th>
                                <th>Customer Last Name</th>
                                <th>Customer Details</th>
                                <th>Delete Customer </th>
                            </tr> 
                        </thead>
                        <tbody>
                            <tr class="active-table">
                                <td>1</td>
                                <td>Deshna</td>
                                <td>Wankhede</td>
                                <td><a href="/"><Button size="small" variant="contained" color="primary" >More</Button></a></td>
                                <td><a href="/"><Button size="small" variant="contained" color="secondary" endIcon={<DeleteIcon />} >Delete</Button></a> </td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </div>
        );
    }
}

export default ListCustomerComponent