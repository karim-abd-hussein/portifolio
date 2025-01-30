import Styles from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faL, faList, faUser} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Header(){

    const [visable,setVisable]=useState(false);
    

    return(
        <div className={Styles.header} >
            <div className={Styles.logo}>
            <FontAwesomeIcon icon={faUser} />
            </div>
            <ul className={Styles.ul}>
                <li><a href='#about'>About</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#contact'>Contact</a></li>
                <li><a href='#footer'>Footer</a></li>
            </ul>

            <div className={Styles.menu} onClick={()=> {
                visable
                ?
                setVisable(false)
                :
                setVisable(true)
                
                }}>

            <FontAwesomeIcon icon={faList} />

            <div className={visable? Styles.dropMenuContainer:Styles.dropMenuContainerHidden}>

            <ul className={Styles.dropMenu}>
                <li><a href='#about'>About</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#contact'>Contact</a></li>
                <li><a href='#footer'>Footer</a></li>
            </ul>

            </div>

            </div>
            </div>
        
    )
}