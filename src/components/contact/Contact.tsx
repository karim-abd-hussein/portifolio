import Styles from './contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific icons
import { faPhone, faLink, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub,faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';

export default function Contact(){


    return(

        <div id='contact' className={Styles.contact}>
            <h2 className='sectionTitle'>Contact me</h2>
            <div className={Styles.contactContainer}> 
        <a href='mailTo::karimabdhussein@gmail.com' target="_blank"><FontAwesomeIcon icon={faEnvelope} /><strong>karimabdhussein@gmail.com</strong></a>
        <a href='tel::+963991214692' target="_blank"><FontAwesomeIcon icon={faPhone}/> <strong>0991214692</strong></a>
        <a href='https://github.com/karim-abd-hussein' target="_blank"><FontAwesomeIcon icon={faGithub}/><strong>Github</strong></a>
        <a href='https://www.linkedin.com/in/karim-hussein-b95035344/' target="_blank"><FontAwesomeIcon icon={faLinkedin}/><strong>Linked In</strong></a>
        <a href='' target="_blank"><FontAwesomeIcon icon={faLink}/><strong>Codeforces</strong></a>
        <a href='https://t.me/karim_abd_hussein' target="_blank"><FontAwesomeIcon icon={faTelegram}/><strong>Telegram</strong></a>
        </div>
        </div>
    )
}