import jwt_decode from "jwt-decode";
import { Redirect, useHistory } from "react-router";

export function Postlogin(email,password) {
    // const history = useHistory();
    // function eiei (){
    //   history.push("/");
    // }
    const option = {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: { "Content-Type": "application/json" },
      };
    
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

export function postRegister(first,last,email,password) {
    console.log(first,last,email,password)
    const option = {
        method: "POST",
        body: JSON.stringify({
          fullname:first + ' ' + last,
          email: email,
          password: password,
          role:'member',
          last_change: Date.now()
        }),
        headers: { "Content-Type": "application/json" },
      };
    
      fetch("http://sheepop.herokuapp.com/users/register", option)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        });
} 
    

