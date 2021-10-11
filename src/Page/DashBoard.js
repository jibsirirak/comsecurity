import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';
import { Icon } from '@iconify/react';
import { Postlogin } from '../fetch/Postlogin';
import {  useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {Alert,AlertTitle} from '@mui/material';
import { Table } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge'

function DashBoard(props) {
   
    return (
        <div>
            <div className={styles.head}>
                <h1 className={styles.h1}>Computer Security</h1>
            </div>
            <div className="container">
                <h1 className="my-5" style={{fontWeight:'900'}}>All Activity</h1>
            
        
                <Table striped bordered hover className="my-5" style={{fontSize:'20px'}}>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Aileen</td>
                            <td>05/8/2021</td>
                            <td>07:31</td>
                            <td><Badge bg="success">Update</Badge></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Aliza</td>
                            <td>07/9/2021</td>
                            <td>07:45</td>
                            <td><Badge bg="danger">Delete</Badge>{' '}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Barron</td>
                            <td>09/9/2021</td>
                            <td>10:11</td>
                            <td><Badge bg="primary">Edit</Badge>{' '}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Caspar</td>
                            <td>02/11/2021</td>
                            <td>11:31</td>
                            <td><Badge bg="danger">Delete</Badge>{' '}</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Daniel</td>
                            <td>10/11/2021</td>
                            <td>13:22</td>
                            <td><Badge bg="primary">Edit</Badge>{' '}</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Emmaline</td>
                            <td>12/11/2021</td>
                            <td>16:15</td>
                            <td><Badge bg="success">Update</Badge></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}


export default DashBoard;