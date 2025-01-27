import { useState, useEffect } from 'react';
import Styles from './skills.module.css';
import { Skill } from './interfaces';

export default function Skills() {
    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        fetch('./skills.json')
            .then((res) => res.json())
            .then((data) => setSkills(data))
            .catch((error) => console.error('Error fetching skills:', error));
    }, []); // Runs only once when the component mounts.

    return (
        <div id="skills" className={Styles.skills} >
            <h2 className='sectionTitle'>Skills</h2>
            <div className={Styles.skillsContanier} >
            {skills.map((skill: Skill, index: number) => (
                <div key={index}>{skill.name}</div> // Displays "Node js".
            ))}
            </div>
        </div>
    );
}
