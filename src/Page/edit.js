import React, { useState, useEffect } from 'react';
import styles from './addEdit.module.css';
import { Link } from 'react-router-dom';
import {  useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

function Edit() {
  const history = useHistory();
  const [fullname,setfullname] = useState('')
  const [productName,setproductName] = useState('')
  const [price,setprice] = useState('')
  const [des,setDes] = useState('')

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
    
    function sendAdd(){
        const option = {
            method: "POST",
            body: JSON.stringify({
                "name" : productName,
                "price" : price,
                "owner_id" : "33a7d3da476a32ac237b3f603a1be62fad00299e0d4b5a8db8d913104edec629",
                "image" : "",
                "detail" : des
            }),
            headers: { "Content-Type": "application/json" },
        };

        fetch("http://localhost:5000/product/edit/616362be6b184e4d5848ae70/", option)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if(data.data === "Add product Success"){
                     history.push("/home")
                }
               
        });
    }

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
            <div className={styles.d_logout_btn}>
                    <button onClick={() =>{ logout()}} className={styles.logout_btn} >LOGOUT</button>
            </div>
        </div>
        
        <div className={styles.mid}>
            <div className={styles.up}>
                <div className={styles.product}>
                    <p className={styles.p_product}>PRODUCT NAME:</p>
                    <div className={styles.box_product}>
                        <input type="text"  
                         onChange={event => setproductName(event.target.value)} 
                        className={styles.ip_product} />
                    </div>
                </div>
                <div className={styles.space2} />
                <div className={styles.price}>
                    <p className={styles.p_price}>PRICE:</p>
                    <div className={styles.box_price}>
                        <input type="text"  
                        onChange={event => setprice(event.target.value)} 
                        className={styles.ip_price} />
                    </div>
                </div>
            </div>
            <div className={styles.space3} />
            <div className={styles.down}>
                <div className={styles.Des}>
                    <p className={styles.p_Des}>DESCRIPTION:</p>
                    <div className={styles.box_Des}>
                        <textarea type="text"  
                        onChange={event => setDes(event.target.value)} 
                        className={styles.ip_Des} />
                    </div>
                </div>
            </div>    
           
        </div>
        <div className={styles.bottom}>
            <div className={styles.d_backbtn}>
                <button className={styles.backbtn}>BACK</button>
            </div>
            <div className={styles.space4} />
            <div className={styles.d_addbtn}>
                <button onClick={()=> sendAdd() } className={styles.addbtn}>ADD</button>
            </div>
        </div>
       
      </div>
    );
}


export default Edit;
  