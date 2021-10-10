import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';
import { Icon } from '@iconify/react';
import { Postlogin } from '../fetch/Postlogin';
import {  useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {Alert,AlertTitle} from '@mui/material';

function Login(props) {
    const history = useHistory(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,seterror] = useState(false)
    useEffect(() => {
        try {
            if(localStorage.getItem('access_token') != ""){
                if(jwt_decode(localStorage.getItem('access_token')).exp > Date.now()/ 1000){
                    history.push("/home")
                }
            }
        } catch(err){
            localStorage.setItem("access_token", "");
            }
        return () => {
        }
    }, [])
    function  eiei  (email,password){
        seterror(false)
        try {
            Postlogin(email,password).then(() => {
                setTimeout(() => {
                seterror(false)
                console.log("eieieieie")
                console.log(localStorage.getItem('access_token'))
                if(localStorage.getItem('access_token') != ""){
                    if(jwt_decode(localStorage.getItem('access_token')).exp > Date.now()/ 1000){
                        history.push("/home")
                    }
                }
                 }, 1000);
            }).catch(() => {
                setTimeout(() => {
                    seterror(true)
                    
                     }, 1000);
            })
        }
        catch(err){
        }
      }
      useEffect(() => {
          console.log(error)
          return () => {
          }
      }, [error])
    return (
      <div>
        <div className={styles.head}>
            <h1 className={styles.h1}>Computer Security</h1>
        </div>
        <div className={styles.signin}>
            <p className={styles.p_signin}>SIGN IN</p>
        </div>

        <div className={styles.mid}>
            <div  className={styles.space} />
            <div className={styles.right}>
                <div className={styles.username}>
                    <Icon icon="bx:bxs-user" style={{marginRight:20,width:40,height:40,color:'#003566'}} />
                    <p className={styles.p_username}>EMAIL:</p>
                </div>
                <div className={styles.box_username}>
                    <input type="email"  
                    onChange={event => setEmail(event.target.value)} 
                    className={styles.ip_username} />
                </div>
              
                <div className={styles.password}>
                    <Icon icon="fluent:key-20-filled" style={{marginRight:10,width:40,height:40,color:'#003566'}} />
                    <p className={styles.p_password}>PASSWORD:</p>
                </div>
                <div className={styles.box_password}>
                    <input className={styles.ip_password}
                    type="password"
                    onChange={event => setPassword(event.target.value)} />
                </div>
                <div className={styles.d_alert}>
                    { error ?
                    <Alert severity="error">ERROR — your email or password is wrong</Alert> :
                    null}
                </div>
                <div className={styles.d_forgot}>
                    <Link to='/forget' className={styles.p_forgot}>FORGOT PASSWORD?</Link>
                </div>
                
                <div className={styles.d_signin_btn}>
                    <button onClick={() =>{eiei(email,password);} } className={styles.signin_btn}>SIGN IN</button>
                </div>
                
            </div>
        </div>

        <div className={styles.bottom}>
            <p className={styles.p_bottom}>Don’t have an account? <Link to='/register' className={styles.sp_bottom}>Sign up</Link>  here</p>
        </div>
      </div>
    );
}


export default Login;
  