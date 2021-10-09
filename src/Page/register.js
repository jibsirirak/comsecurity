import React, { useState, useEffect } from 'react';
import styles from './register.module.css';
import { postRegister } from '../fetch/postregister';
import {  useHistory } from "react-router-dom";

function Register(props) {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function  eiei  (first,last,email,password){
        await postRegister(first,last,email,password)
        history.push("/")
    }

    useEffect(() => {
        console.log(first,last,email,password)
        return () => {
            
        }
    }, [first,last,email,password])

    return (
      <div>
        <div className={styles.head}>
            <h1 className={styles.h1}>Computer Security</h1>
        </div>
        <div className={styles.signin}>
            <p className={styles.p_signin}>REGISTER</p>
        </div>

        <div className={styles.mid}>
            <div  className={styles.space} />
            <div className={styles.right}>
                <div className={styles.d_fullname}> 
                    <div className={styles.username}>
                    <p className={styles.p_username}>FIRST NAME:</p>
                    </div>
                    <div className={styles.lastname}>
                    <p className={styles.p_username}>LAST NAME:</p>
                    </div>
                    
                </div>
                <div className={styles.d_ipfullname}>
                    <div className={styles.box_username}>
                        <input type="text"  
                        onChange={event => setFirst(event.target.value)} 
                        className={styles.ip_username} />
                    </div>
                    <div className={styles.box_username}>
                        <input type="text"  
                        onChange={event => setLast(event.target.value)}  
                        className={styles.ip_username} />
                    </div>
                </div>
                
                <div className={styles.email}>
                    <p className={styles.p_email}>EMAIL:</p>
                </div>
                <div className={styles.box_email}>
                    <input type="email"  
                    onChange={event => setEmail(event.target.value)}
                    className={styles.ip_email} />
                </div>
                <div className={styles.password}>
                    <p className={styles.p_password}>PASSWORD:</p>
                </div>
                <div className={styles.box_password}>
                    <input type="password"  
                    onChange={event => setPassword(event.target.value)}
                    className={styles.ip_password} />
                </div>
                <div className={styles.d_signin_btn}>
                    <button onClick={() => eiei(first,last,email,password)} className={styles.signin_btn}>SIGN UP</button>
                </div>
            </div>
        </div>
      </div>
    );
}


export default Register;
  