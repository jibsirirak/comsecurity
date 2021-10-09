import React, { useState, useEffect } from 'react';
import { Link ,useParams} from 'react-router-dom';
import styles from './forget.module.css';
import { createjwt } from '../fetch/createjwt';
import jwt_decode from "jwt-decode";
import { Redirect, useHistory } from "react-router";
import { resetpassword } from '../fetch/resetpassword';

function Repass() {
    const [pass,setpass] = useState('')
    const [pass2,setpass2] = useState('')
    const  token  = useParams();
    const history = useHistory();
    console.log(token)
    const access_token = jwt_decode(token.token)
    if(access_token.exp < Date.now()/ 1000 ){
        console.log('หมดอายุ')
        //redirect =========================>
    }
    else{
        console.log('ใช้งานได้')
    }
   
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
                    <input onChange={(e) => setpass(e.target.value)} className={styles.ip_password} />
                </div>
                <div className={styles.password}>
                    <p className={styles.p_password}>PASSWORD:</p>
                </div>
                <div className={styles.box_password}>
                    <input onChange={(e) => setpass2(e.target.value)} className={styles.ip_password} />
                </div>
                <div className={styles.d_signin_btn}>
                <button onClick={() => hashpass(access_token.email,pass)}  className={styles.signin_btn}>CONFIRM</button>
                </div>
            </div>
        </div>
      </div>
    );
}


export default Repass;
  