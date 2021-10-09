export async function resetpassword(email,password){
    const option = {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: { "Content-Type": "application/json" },
      };
    
      fetch("http://sheepop.herokuapp.com/users/resetPassword", option)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        });
}