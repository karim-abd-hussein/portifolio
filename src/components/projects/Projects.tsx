import { useEffect, useState } from 'react';
import Styles from './projects.module.css'
import { Project } from './interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific icons
import {  faExternalLink, faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
export default function Projects(){

    const [projects, setProjects] = useState<Project[]>([]);
    const [challenages,setChallenages]=useState<Project[]>([]);
    
        useEffect(() => {
            fetch('./projects.json')
                .then((res) => res.json())
                .then((data) => setProjects(data))
                .catch((error) => console.error('Error fetching skills:', error));

                fetch('./challenages.json')
                .then((res) => res.json())
                .then((data) => setChallenages(data))
                .catch((error) => console.error('Error fetching skills:', error));

        }, []); // Runs only once when the component mounts.
    

    return(

        <div id='projects' className={Styles.projects}>
        <div>
        <h2 className='sectionTitle'>Projects</h2>
        <div className={Styles.cards}>
         {projects.map((project:Project, index: number) => (
                        <div key={index}>
                            <img src={project.image} alt={project.title} />
                            <div className={Styles.textContainer}>
                            <h3>{project.title}</h3>
                            <h5>{project.type}</h5>
                            <p>{project.description}</p>
                            </div>
                            <div className={Styles.externalLinks}>
                            <a href={project.github}><FontAwesomeIcon className={Styles.icon} icon={faGithub} /></a>
                            <a href={project.website}><FontAwesomeIcon className={Styles.icon} icon={faExternalLink} /></a>
                            </div>
                        </div> 
                    ))}
                    </div>
        </div>
        <div >
        <h2  className='sectionTitle' >Challenages</h2>
        <div className={Styles.cards}>
        {challenages.map((project:Project, index: number) => (
                        <div key={index}>
                            <img src={project.image} alt={project.title} />
                            <div className={Styles.textContainer}>
                            <h3>{project.title}</h3>
                            <h5>{project.type}</h5>
                            <p>{project.description}</p>
                            </div>
                            <div className={Styles.externalLinks}>
                            <a href={project.github}><FontAwesomeIcon className={Styles.icon} icon={faGithub} /></a>
                            <a href={project.website}><FontAwesomeIcon className={Styles.icon} icon={faExternalLink} /></a>
                            </div>
                        </div> 
                    ))}
    </div>
        </div>
        </div>
    )
}