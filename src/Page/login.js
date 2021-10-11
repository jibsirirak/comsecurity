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
    const [lock,setlock] = useState(false)
    localStorage.setItem('blockerror',"ERROR — your email or password is wrong")
    const [errmessage,setmessage] = useState("ERROR — your email or password is wrong")
    useEffect(() => {
        console.log("Lock : ",lock)
        return () => {
        }
    }, [lock])
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
    async function   eiei  (email,password){
        console.log("qweqweqwe")
        seterror(false)
        try {
            const option = {
                method: "POST",
                body: JSON.stringify({
                email : email
                }),
                headers: { "Content-Type": "application/json" },
              };
                await fetch("http://sheepop.herokuapp.com/users/getlogin",option)
                .then((res) => res.json())
                .then(async (data) => {
                console.log("login check ",data.count)
                if(data.count >= 3){
                // localStorage.setItem('blockerror',"maxlogin")
                localStorage.setItem('blockerror',"login kuy rai reset password now")
                console.log("Error")
                localStorage.setItem("access_token","");
                console.log(localStorage.getItem('blockerror'),localStorage.getItem("access_token"))
                setmessage(localStorage.getItem('blockerror'))
                seterror(true)
                throw(error)
                }else{
                Postlogin(email,password,setlock).then((data) => {
                setTimeout(() => {
                seterror(false)
                console.log("bright : ",eiei)
                console.log("eieieieie")
                console.log(localStorage.getItem('access_token'))
                if(localStorage.getItem('access_token') != ""){
                    if(jwt_decode(localStorage.getItem('access_token')).exp > Date.now()/ 1000){
                        history.push("/home")
                    }
                }
                 }, 2500);
            }).catch(() => {
                const option = {
                    method: "POST",
                    body: JSON.stringify({
                    email : email
                    }),
                    headers: { "Content-Type": "application/json" },
                  };
                     fetch("http://sheepop.herokuapp.com/users/updatelogin",option)
                    .then((res) => res.json())
                    .then(async (data) => {
                    console.log("login",data)
                })
                setmessage(localStorage.getItem('blockerror'))
                setTimeout(() => {
                    seterror(true)
                    
                     }, 2000);
            })

        }
    });


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
                    <Alert severity="error">{errmessage}</Alert> :
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
  