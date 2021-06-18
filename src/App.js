import React, { Component } from 'react';
import Cloud from './components/Cloud/Cloud'
import Hero from './components/Hero/Hero'
import styles from './App.module.css'

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.mainWrapper}>
                <div className={styles.wrapperLeft}>div 1</div>
                <div className={styles.wrapperRight}>
                    <Cloud />
                    <Hero />
                </div>
            </div>
         );
    }
}
 
export default App;