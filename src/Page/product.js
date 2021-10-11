import React, { useState, useEffect } from 'react';
import styles from './product.module.css';
import { Link } from 'react-router-dom';
import {  useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Table } from 'react-bootstrap';

function Product() {
  const history = useHistory();
  const [fullname,setfullname] = useState('')
  const product = [
    {
        _id : '61636a02fe0f44750067f606',
        name : "mamung1",
        price : 100,
        owner_id : '33a7d3da476a32ac237b3f603a1be62fad00299e0d4b5a8db8d913104edec629',
        image : "",
        detail : "asdasdasdasdasdasdasdasdasd"
    },{
        _id : '61636a02fe0f4475006ASDASD',
        name : "mamung2",
        price : 200,
        owner_id : '33a7d3da476a32ac237b3f603a1be62fad00299e0d4b5a8db8d913104edec629',
        image : "",
        detail : "asdasdasdasdasdasdasdasdasd"
    },{
        _id : '61636a02ASDASD44750067f606',
        name : "mamung3",
        price : 300,
        owner_id : '33a7d3da476a32ac237b3f603a1be62fad00299e0d4b5a8db8d913104edec629',
        image : "",
        detail : "asdasdasdasdasdasdasdasdasd"
    },{
        _id : '61636a02feASDFDG67f606',
        name : "mamung4",
        price : 400,
        owner_id : '33a7d3da476a32ac237b3f603a1be62fad00299e0d4b5a8db8d913104edec629',
        image : "",
        detail : "asdasdasdasdasdasdasdasdasd"
    }


]
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

  function sendDelete(){
    const option = {
        method: "POST",
        body: JSON.stringify({
          id:jwt_decode(localStorage.getItem('access_token')).id
        }),
        headers: { "Content-Type": "application/json" },
    };

    fetch("http://localhost:5000/product/delete", option)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
    });
  
}

    return (
      <div>
        <div className={styles.head}>
            <h1 className={styles.h1}>Computer Security</h1>
            <div className={styles.space} >
              <div>
                <Link to='/add' className={styles.pro2}>ADD PRODUCT</Link>
              </div>
              <div>
                <Link to='/dashboard' className={styles.pro2}>DASHBOARD</Link>
              </div>
            </div>
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
          {product.map((p) => ( 
            <tbody>
                <tr>
                <td>{p._id}</td>
                <td>{p.name}</td>
                <td>{p.detail}</td>
                <td>{p.price}</td>
                <td><Link to='/edit' className={styles.edit_btn}>EDIT</Link></td>
                <td><button onClick={() =>{sendDelete();} } className={styles.delete_btn}>DELETE</button></td>
                </tr>
            </tbody>
          ))}
          </Table>
        </div>
      </div>
    );
}


export default Product;
  