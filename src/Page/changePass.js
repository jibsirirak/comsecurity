import React, { useState, useEffect } from 'react';
import { Link ,useParams} from 'react-router-dom';
import styles from './forget.module.css';
import { createjwt } from '../fetch/createjwt';
import jwt_decode from "jwt-decode";
import { Redirect, useHistory } from "react-router";
import { resetpassword } from '../fetch/resetpassword';
import {Alert,AlertTitle} from '@mui/material';

function Changepass() {
    const [pass,setpass] = useState('')
    const [pass2,setpass2] = useState('')
    const [error,seterror] = useState(false)

    const history = useHistory();
   async function hashpass(email,pass){
        const crypto = require('crypto');
        const hash = await crypto.createHash('sha256');
        hash.on('readable', () => {
            const data = hash.read();
            if (data) {
                console.log(data.toString('hex'));
                const hashpass = data.toString('hex');
                resetpassword(email,hashpass)
            }
        });
        hash.write(pass);
        hash.end();
        history.push("/home")
    }

    function chackpass(){
        if(pass === pass2){
            const option = {
                method: "POST",
                body: JSON.stringify({
                  id:jwt_decode(localStorage.getItem('access_token')).id
                }),
                headers: { "Content-Type": "application/json" },
              };

            fetch("http://sheepop.herokuapp.com/users/findemail", option)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    console.log(jwt_decode(localStorage.getItem('access_token')));
                    hashpass(data.email,pass)
                });
        }
        else{
            seterror(true);
        }
    }
    return (
      <div>
        <div className={styles.head}>
            <h1 className={styles.h1}>Computer Security</h1>
        </div>
        <div className={styles.forget}>
            <p className={styles.p_forget}>CHANGE PASSWORD</p>
        </div>

        <div className={styles.mid}>
            <div  className={styles.space} />
            <div className={styles.right}>
                <div className={styles.password}>
                    <p className={styles.p_password}>PASSWORD:</p>
                </div>
                <div className={styles.box_password}>
                    <input type='password' 
                    onChange={(e) => setpass(e.target.value)} 
                    className={styles.ip_password} />
                </div>
                <div className={styles.password}>
                    <p className={styles.p_password}>PASSWORD:</p>
                </div>
                <div className={styles.box_password}>
                    <input type='password' 
                    onChange={(e) => setpass2(e.target.value)} 
                    className={styles.ip_password} />
                </div>
                <div className={styles.d_alert}>
                    { error ?
                    <Alert severity="error">ERROR — password is not matching</Alert> :
                    null}
                </div>
                <div className={styles.d_signin_btn}>
                <button onClick={() => chackpass()}  className={styles.signin_btn}>CONFIRM</button>
                </div>
            </div>
        </div>
      </div>
    );
}


export default Changepass;
  