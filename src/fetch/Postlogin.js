
import React, { useState, useEffect ,useCallback } from 'react';
import { throws } from "assert";
import jwt_decode from "jwt-decode";
import { Redirect, useHistory } from "react-router";

export async function Postlogin(email,password,setlock) {
  // const [ans,setans] = useState(false)
  const crypto = require('crypto');
  const hash = await crypto.createHash('sha256');
  // useCallback(
  //   () => {
  //     setlock(true)
  //   },
  //   [setlock],
  // )
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
      console.log("asdasdasdasd",data)
      localStorage.setItem("access_token", data.access_token);
      jwt_decode(localStorage.getItem('access_token'))
      console.log("asdasdasdasdasdasdasdasd", jwt_decode(data.access_token))
      const id =  jwt_decode(data.access_token).id
      console.log("id : ",id)
      
      
    })
    
}



