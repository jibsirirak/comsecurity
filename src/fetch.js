export function Postlogin(email,password) {

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
        //   localStorage.setItem("access_token", data.access_token);
        //   try{
        //     console.log(jwt_decode(localStorage.getItem('access_token')).id)
        //     history.push("/");
        //   }catch(err){
        //     seterror("อีเมลล์หรือรหัสผ่านไม่ถูกต้อง")
        //     setVisible(false)
        //     document.getElementById('email').value = "";
        //     document.getElementById('password').value = "";
        //     console.log("Error")
        //   }
          // 
        });
} 
    

