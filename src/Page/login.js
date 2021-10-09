import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';
import { Icon } from '@iconify/react';
import { Postlogin } from '../fetch/Postlogin';
import { Redirect, useHistory } from "react-router-dom";

function Login(props) {
    const history = useHistory();
    console.log(history);
    function eiei (email,password){
        Postlogin(email,password).then(history.push("/home")
      })
        
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log(email,password)
        return () => {
            
        }
    }, [email,password])

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
                <Link to='/forget' className={styles.p_forgot}>FORGOT PASSWORD?</Link>
                <div className={styles.d_signin_btn}>
                    <button onClick={() =>{eiei(email,password);} } className={styles.signin_btn}>SIGN IN</button>
                </div>
            </div>
        </div>

        <div className={styles.bottom}>
            <p className={styles.p_bottom}>Don’t have an account? <span className={styles.sp_bottom}>Sign up</span>  here</p>
        </div>
      </div>
    );
}


export default Login;
  