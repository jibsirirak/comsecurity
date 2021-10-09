export async function postRegister(first,last,email,password) {
    console.log(first,last,email,password)
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
              fullname:first + ' ' + last,
              email: email,
              password:  data.toString('hex'),
              role:'member',
              last_change: Date.now()
            }),
            headers: { "Content-Type": "application/json" },
          };
      }
    });
    hash.write(password);
    hash.end();
    console.log("eiei",option);
  
    fetch("http://sheepop.herokuapp.com/users/register", option)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
    });
} 
    