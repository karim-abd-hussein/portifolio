import Styles from "./about.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBuildingColumns,
  faLaptopCode,
  faHourglassStart,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div id="about" className={Styles.about}>
      <div className={Styles.textContainer}>
        <h1>Hi,I'm Karim Hussein</h1>
        <h2>Full-stact Developer</h2>
        <p>
          Full Stack Developer with expertise in React.js, Node.js, databases,
          APIs, and responsive design. Passionate about software engineering
          principles, I deliver clean, scalable, and user-friendly solutions
          aligned with business goals.
        </p>
        <h3>Core Competencies</h3>
        <ul>
          <li>Problem Solving</li>
          <li>Algorithms & Data Structures</li>
          <li>Object-Oriented Programming (OOP)</li>
          <li>Database Management</li>
          <li>Communication Protocols</li>
          <li>SOLID Principles</li>
        </ul>
      </div>
      <div className={Styles.imgContainer}>
        <img src="profile_bg.png" />
        <p>
          {" "}
          <FontAwesomeIcon icon={faBuildingColumns} /> Damascus University|
          <FontAwesomeIcon icon={faLaptopCode} /> Computer Technologies{" "}
        </p>
        <p>
          <FontAwesomeIcon icon={faHourglassStart} /> present 2021
        </p>
      </div>
    </div>
  );
}
