import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './product.module.css';
import { Icon } from '@iconify/react';
import { Postlogin } from '../fetch/Postlogin';
import {  useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {Alert,AlertTitle} from '@mui/material';
import { Table } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge'

function DashBoard(props) {

    const history = useHistory();
    const [fullname,setfullname] = useState('');
    const [name,setName] = useState('');
    const [acc,setAcc] = useState([]);
  
    function logout(){
      localStorage.setItem("access_token", "");
      history.push("/")
    }

    useEffect(() => {
      try{
        if(jwt_decode(localStorage.getItem('access_token')).exp < Date.now()/ 1000){
            history.push("/")
        }
        } catch(err){
              history.push("/")
        }
        getFullame();
        getLog();
      return () => {
        
      }
    }, [])

    function getLog(){
        const option = {
            method: "GET",
          };
        fetch("http://sheepop.herokuapp.com/data_log",option)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setAcc(data.data);
            
        });
    }

    function getFullame(){
        const option = {
        method: "POST",
        body: JSON.stringify({
            id:jwt_decode(localStorage.getItem('access_token')).id
        }),
        headers: { "Content-Type": "application/json" },
        };
    
        fetch("http://sheepop.herokuapp.com/users/findfullname", option)
            .then((res) => res.json())
            .then((data) => {
            setfullname(data.fullname);
                
            });
    }
    

    return (
        <div>
           <div className={styles.head}>
            <h1 className={styles.h1}>Computer Security</h1>
            <div className={styles.space} >
              <div>
                <Link to='/add' className={styles.pro2}>ADD PRODUCT</Link>
              </div>
              <div>
                <Link to='/dashboard' className={styles.pro2}>DASHBOARD</Link>
              </div>
            </div>
            <div className={styles.profile}>
              <p className={styles.pro1}>{fullname}</p>
              <Link to='/changepass' className={styles.pro2}>CHANGE PASSWORD</Link>
            </div>
            <div className={styles.profileImgContainer}>
              <img 
                style={{width: 80, height: 80, borderRadius: 80/ 2}} 
                src='https://s.isanook.com/ca/0/ui/281/1405996/oatmealpopcat_234623206_147287474156656_3695665365715248797_n.jpg' 
                resizeMode="cover" 
                alt="new"
              />
            </div>
            <div className={styles.d_logout_btn}>
                    <button onClick={() =>{ logout()}} className={styles.logout_btn} >LOGOUT</button>
            </div>
        </div>
            <div className="container">
                <h1 className="my-5" style={{fontWeight:'900'}}>All Activity</h1>
            
        
                <Table striped bordered hover className="my-5" style={{fontSize:'20px'}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Activity</th>
                        </tr>
                    </thead>
                    {acc.map((a) => ( 
                        <tbody key={(a._id)}>
                        <tr>
                           
                            <td>{a.owner}</td>
                            <td>{a.Date}</td>
                            <td>07:31</td>
                            <td><Badge bg="success">Update</Badge></td>
                            <td><Badge bg="danger">Delete</Badge>{' '}</td>
                            <td><Badge bg="primary">Edit</Badge>{' '}</td>
                        </tr>
                    </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
}


export default DashBoard;