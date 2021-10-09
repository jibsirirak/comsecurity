import React from 'react';
import { Link } from 'react-router-dom';
import styles from './register.module.css';

function Register() {
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
                <div className={styles.username}>
                    <p className={styles.p_username}>FULLNAME:</p>
                </div>
                <div className={styles.box_username}>
                    <input className={styles.ip_username} />
                </div>
                <div className={styles.email}>
                    <p className={styles.p_email}>EMAIL:</p>
                </div>
                <div className={styles.box_email}>
                    <input className={styles.ip_email} />
                </div>
                <div className={styles.password}>
                    <p className={styles.p_password}>PASSWORD:</p>
                </div>
                <div className={styles.box_password}>
                    <input className={styles.ip_password} />
                </div>
                <div className={styles.d_signin_btn}>
                    <Link to='/home' className={styles.signin_btn}>SIGN UP</Link>
                </div>
            </div>
        </div>
      </div>
    );
}


export default Register;
  