import React from 'react';
import styles from './home.module.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div>
        <div className={styles.head}>
            <h1 className={styles.h1}>Computer Security</h1>
            <div className={styles.space} />
            <div className={styles.profile}>
              <p className={styles.pro1}>USER01</p>
              <Link to='/' className={styles.pro2}>CHANGE PASSWORD</Link>
            </div>
            <div className={styles.profileImgContainer}>
              <img 
                style={{width: 80, height: 80, borderRadius: 80/ 2}} 
                src='https://s.isanook.com/ca/0/ui/281/1405996/oatmealpopcat_234623206_147287474156656_3695665365715248797_n.jpg' 
                resizeMode="cover" 
                alt="new"
              />
            </div>
        </div>
        <div className={styles.mid} style={{ 
          backgroundImage: 'url("https://cdn.discordapp.com/attachments/895591558433366066/896071083705393222/istockphoto-1172944401-612x612_1.jpg")',
          backgroundPosition: 'center',
          backgroundSize: "120% 150%",
          backgroundRepeat: 'no-repeat' }}>
          <div className = {styles.mainW}>
            <div  className= {styles.wtw}><p className={styles.p}>WELCOME</p></div>
            <div  className= {styles.wtw1}><p className={styles.p1}>TO</p></div>
            <div  className= {styles.wtw2}><p className={styles.p2}>ACCESS CONTROL</p></div>
            <div  className= {styles.wtw3}><p className={styles.p3}>WEBSITE</p></div>
          </div>  
        </div>
      </div>
    );
}


export default Home;
  