import Styles from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';

export default function Header(){


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
            </div>
        
    )
}