import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './forget.module.css';
import { createjwt } from '../fetch/createjwt';
import {Alert,AlertTitle} from '@mui/material';

function Forget() {
    const [email,setemail] = useState('')
    const [error,seterror] = useState(false)
    useEffect(() => {
        console.log(email)
        return () => {

        }
    }, [email])
    return (
      <div>
        <div className={styles.head}>
            <h1 className={styles.h1}>Computer Security</h1>
        </div>
        <div className={styles.forget}>
            <p className={styles.p_forget}>FORGOT PASSWORD</p>
        </div>

        <div className={styles.mid}>
            <div  className={styles.space} />
            <div className={styles.right}>
                <div className={styles.password}>
                    <p className={styles.p_password}>EMAIL:</p>
                </div>
                <div className={styles.box_password}>
                    <input onChange={(e) => setemail(e.target.value)} className={styles.ip_password} />
                </div>
                {/* <div className={styles.password}>
                    <p className={styles.p_password}>PASSWORD:</p>
                </div>
                <div className={styles.box_password}>
                    <input className={styles.ip_password} />
                </div> */}
                <div className={styles.d_alert}>
                    { error ?
                    <Alert variant="filled" severity="info"> Please check your email </Alert> :
                    null}
                </div>
                <div className={styles.d_signin_btn}>
                   <button onClick={() => createjwt(email)} onClick={() => seterror(true)}  className={styles.signin_btn}>CONFIRM</button>
                </div>
                
            </div>
        </div>
      </div>
    );
}


export default Forget;