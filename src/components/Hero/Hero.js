import React from 'react';
import UnicornImg from './unicorn.png'
// import RainbowLeprechaunImg from './Rainbow_Leprechaun.png'
import styles from './Hero.module.css'

const Hero = () => {
    return ( 
        <div className={styles.heroContainer}>
            <img src={UnicornImg} alt="unicorn" className={styles.heroImage} /> 
        </div>
     );
}
 
export default Hero;