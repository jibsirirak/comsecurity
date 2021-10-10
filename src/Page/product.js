import React, { useState, useEffect } from 'react';
import styles from './product.module.css';
import { Link } from 'react-router-dom';
import {  useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Table } from 'react-bootstrap';

function Product() {
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
            <div className={styles.d_logout_btn}>
                    <button onClick={() =>{ logout()}} className={styles.logout_btn} >LOGOUT</button>
            </div>
        </div>
        <div className={styles.product}>
            <p className={styles.p_product}>PRODUCT</p>
        </div>
        <div className={styles.mid}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>PRODUCT NAME</th>
                    <th>PICTURE</th>
                    <th>PRICE</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><button className={styles.edit_btn}>EDIT</button></td>
                    <td><button className={styles.delete_btn}>DELETE</button></td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>
      </div>
    );
}


export default Product;
  