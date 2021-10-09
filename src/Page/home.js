import React from 'react';
// import { Icon } from '@iconify/react';
// import { Link } from 'react-router-dom';
import styles from './home.module.css';

function Home() {
    return (
      <div>
        <div className={styles.head}>
            <h1 className={styles.h1}>Computer Security</h1>
            <div className={styles.space} />
            <div className={styles.profileImgContainer}>
              <img 
                style={{width: 80, height: 80, borderRadius: 80/ 2}} 
                src='https://s.isanook.com/ca/0/ui/281/1405996/oatmealpopcat_234623206_147287474156656_3695665365715248797_n.jpg' 
                resizeMode="cover" 
                alt="new"
              />
            </div>
        </div>
        <div className={styles.signin}>
            <p className={styles.p_signin}> DROP THE MONEYYY อี๊ๆๆๆๆๆ </p>
        </div>

        <div className={styles.mid}>
        </div>
      </div>
    );
}


export default Home;
  