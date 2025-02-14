import Styles from "./skills.module.css";

export default function Skills() {
 
  return (
    <div id="skills" className={Styles.skills}>
      <h2 className="sectionTitle">Technical Skills</h2>
      <div className={Styles.skillsContanier}>
        <div>
          <i className="devicon-nodejs-plain colored"></i>
          <p>Node js</p>
        </div>

        <div>
          <i className="devicon-react-original colored"></i>
          <p>React js</p>
        </div>

        <div>
          <i className="devicon-nestjs-plain colored"></i>

          <p>Nest js</p>
        </div>

        <div>
          <i className="devicon-express-original colored"></i>

          <p>Express js</p>
        </div>

        <div>
          <i className="devicon-javascript-plain colored"></i>

          <p>JS</p>
        </div>

        <div>
          <i className="devicon-typescript-plain colored"></i>

          <p>TS</p>
        </div>

        <div>
          <i className="devicon-cplusplus-plain colored"></i>
          <p>C++</p>
        </div>
        
        <div>
          <i className="devicon-css3-plain colored"></i>

          <p>CSS</p>
        </div>

        <div>
          <i className="devicon-html5-plain colored"></i>

          <p>HTML</p>
        </div>

        <div>
          <i className="devicon-mongodb-plain colored"></i>

          <p>MongoDB</p>
        </div>

        <div>
          <i className="devicon-mysql-plain colored"></i>

          <p>MySQL</p>
        </div>

        <div>
          <i className="devicon-bash-plain colored"></i>

          <p>Bash</p>
        </div>

        <div>
          <i className="devicon-postman-plain colored"></i>

          <p>Postman</p>
        </div>

        <div>
          <i className="devicon-git-plain colored"></i>
          <p>Git</p>
        </div>
      </div>
    </div>
  );
}
