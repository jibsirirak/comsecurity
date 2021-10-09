
const jwt = require('jsonwebtoken');
// const configs = require('.././config/index')
require('dotenv').config();

export async function createjwt(email) {
    // const history = useHistory();
    // function eiei (){
    //   history.push("/");
    // }

    // console.log(process.env.JWT_SECRET)
    const token = await jwt.sign({
        email : email
      }, "Uc4EYykjzZr28rroZBUAPwpzre0jyMx5JVVpnPcaBWuHmp3cgj6qY7j2Jtr0wGW",  { expiresIn: '5m' });
    console.log(token)
    const option = {
        method: "POST",
        body: JSON.stringify({
          email: email,
          text: "http://localhost:3000/reset/"+token,
        }),
        headers: { "Content-Type": "application/json" },
      };
    
      fetch("http://sheepop.herokuapp.com/users/sentEmail", option)
        .then((res) => res.json())
        .then((data) => {
          
          
        });
} 