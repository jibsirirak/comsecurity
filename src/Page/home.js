import React, { useState, useEffect } from 'react';
import styles from './home.module.css';
import { Link } from 'react-router-dom';
import {  useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

function Home() {
  const history = useHistory();
  const [fullname,setfullname] = useState('')
  function logout(){
    localStorage.setItem("access_token", "");
    history.push("/")
  }
  useEffect(() => {
    try {
      if(jwt_decode(localStorage.getItem('access_token')).exp < Date.now()/ 1000){
          history.push("/")
      }
  } catch(err){
    history.push("/")
      }
    return () => {
      
    }
  }, [])

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

    return (
      <div>
        <div className={styles.head}>
            <h1 className={styles.h1}>Computer Security</h1>
            <div className={styles.space} />
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
            <div className={styles.d_signin_btn}>
                    <button onClick={() =>{ logout()}} className={styles.signin_btn} >LOGOUT</button>
            </div>
        </div>
        <div className={styles.mid} style={{ 
          backgroundImage: 'url("https://cdn.discordapp.com/attachments/895591558433366066/896071083705393222/istockphoto-1172944401-612x612_1.jpg")',
          backgroundPosition: 'center',
          backgroundSize: "120% 150%",
          backgroundRepeat: 'no-repeat' }}>
          <div className = {styles.mainW}>
            <div  className= {styles.wtw}><p className={styles.p}>WELCOME</p></div>
            <div  className= {styles.wtw1}><p className={styles.p1}>TO</p></div>
            <div  className= {styles.wtw2}><p className={styles.p2}>ACCESS CONTROL</p></div>
            <div  className= {styles.wtw3}><p className={styles.p3}>WEBSITE</p></div>
          </div>  
        </div>
      </div>
    );
}


export default Home;
  