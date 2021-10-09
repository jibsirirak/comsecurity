import jwt_decode from "jwt-decode";
import { Redirect, useHistory } from "react-router";

export async function Postlogin(email,password) {

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
  
  fetch("http://sheepop.herokuapp.com/users/login", option)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      localStorage.setItem("access_token", data.access_token);
      try{
        console.log(jwt_decode(localStorage.getItem('access_token')).id)
        return <Redirect to='/home'/>;
        // eiei();
      }catch(err){
        // seterror("อีเมลล์หรือรหัสผ่านไม่ถูกต้อง")
        // setVisible(false)
        // document.getElementById('email').value = "";
        // document.getElementById('password').value = "";
        // console.log("Error")
      }
    });
} 



