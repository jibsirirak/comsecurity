import React from 'react';
import { Link } from 'react-router-dom';
import styles from './forget.module.css';

function Repass() {
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
                    <input className={styles.ip_password} />
                </div>
                <div className={styles.password}>
                    <p className={styles.p_password}>PASSWORD:</p>
                </div>
                <div className={styles.box_password}>
                    <input className={styles.ip_password} />
                </div>
                <div className={styles.d_signin_btn}>
                   <Link to='/home' className={styles.signin_btn}>CONFIRM</Link>
                </div>
            </div>
        </div>
      </div>
    );
}


export default Repass;
  