
import React, { useState, useEffect } from 'react';
import { throws } from "assert";
import jwt_decode from "jwt-decode";
import { Redirect, useHistory } from "react-router";

export async function Postlogin(email,password) {
  // const [ans,setans] = useState(false)
  const crypto = require('crypto');
  const hash = await crypto.createHash('sha256');
  let option = {}
  
  hash.on('readable', () => {
    const data = hash.read();
    if (data) {
        console.log(data.toString('hex'));
        option = {
          method: "POST",
          body: JSON.stringify({
          email: email,
          password:  data.toString('hex'),
          }),
          headers: { "Content-Type": "application/json" },
        };
    }
  });
  hash.write(password);
  hash.end();
  console.log("eiei",option);
  const result = "";
  

  
   await fetch("http://sheepop.herokuapp.com/users/login", option)
    .then((res) => res.json())
    .then(async (data) => {
      console.log(data)
      await localStorage.setItem("access_token", data.access_token);
      console.log(jwt_decode(localStorage.getItem('access_token')).id)
    });
  
    
} 



