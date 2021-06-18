import React from 'react';
import CloudImg from './mario-cloud.png'
import styles from './Cloud.module.css'


const Cloud = () => {
    return ( 
        <div className={styles.cloudContainer}>
            <img src={CloudImg} alt="cloud" className={styles.cloudImage} />
        </div>
     );
}
 
export default Cloud;