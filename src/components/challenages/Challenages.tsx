import { useEffect, useState } from "react";
import Styles from './challenages.module.css'
import { Challenages as IChallenages}  from "./interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

export default function Challenages(){

        const [challenages,setChallenages]=useState<IChallenages[]>([]);
        
            useEffect(() => {
                    fetch('./challenages.json')
                    .then((res) => res.json())
                    .then((data) => setChallenages(data))
                    .catch((error) => console.error('Error fetching skills:', error));
    
            }, []);

return (<div className={Styles.challenagesContainer} >
    <h2  className='sectionTitle' >Challenages</h2>
    <div className={Styles.cards}>
    {challenages.map((challenage:IChallenages, index: number) => (
                    <div className={Styles.card} key={index}>
                        <img src={challenage.image} alt={challenage.title} />
                        <div className={Styles.contentContainer}>
                        <div className={Styles.textContainer}>
                        <h4>{challenage.title}</h4>
                        <p>{challenage.description}</p>
                        </div>
                        <div className={Styles.externalLinks}>
                        <a href={challenage.github}><FontAwesomeIcon className={Styles.icon} icon={faGithub} /></a>
                        <a href={challenage.website}><FontAwesomeIcon className={Styles.icon} icon={faExternalLink} /></a>
                        </div>
                        </div>
                    </div> 
                ))}
</div>
    </div>)

}