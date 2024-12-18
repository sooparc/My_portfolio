import profile from "../Assets/ProfileImg.png";
import classes from "../Page/Home.module.css";
import projects from "../Data/projectData";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Card } from "react-bootstrap";
import projectImg0 from "../Assets/Mediclo.png";
import projectImg1 from "../Assets/Simplejobs.png";
import projectImg2 from "../Assets/AmazingBreweries.png";
import projectImg3 from "../Assets/IdealType-app.png";
import projectImg4 from "../Assets/UnionNailSalon.png";
import projectImg5 from "../Assets/pizzaOrdering-app.png";
import skill1 from "../Assets/javascript.png";
import skill2 from "../Assets/html.jpg";
import skill3 from "../Assets/css.png";
import skill4 from "../Assets/typeScript.jpeg";
import skill5 from "../Assets/jQuery.png";
import skill6 from "../Assets/reactjs.jpg";
import skill7 from "../Assets/mysql.png";
import skill8 from "../Assets/firebase.png";
import skill9 from "../Assets/nodejs.png";
import skill10 from "../Assets/mongodb.jpg";

import pdf from "../Assets/Soojin_park_resume.pdf";

const Home = () => {
  const githubIcon = <FontAwesomeIcon icon={faGithub} />;
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />;
  const gmailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const downloadIcon = <FontAwesomeIcon icon={faFileArrowDown} />;

  let picArr = [
    projectImg0,
    projectImg1,
    projectImg2,
    projectImg3,
    projectImg4,
    projectImg5,
  ];

  let skillArr = [skill1, skill2, skill3, skill4, skill5];

  let skillArr2 = [skill6, skill7, skill8, skill9, skill10];

  return (
    <div className={classes.body}>
      <div className={classes.leftContainer}>
        <div className={classes.leftContent}>
          <img src={profile} className={classes.profileImg} />
          <div className={classes.introductionTitle}>Hello! I'm Soo Park</div>
          <div className={classes.introductionContent}>
            <br /> I'm a<span> </span>
            <div className={classes.highlight}>Full Stack Web Developer</div> living
            in Los Angeles
            <br /> I enjoy building creative & functional websites
          </div>

          <div className={classes.iconContainer}>
            <a href="https://github.com/sooparc" className={classes.icon}>
              {githubIcon}
            </a>
            <a
              href="https://www.linkedin.com/in/soojin-park-6bb373141/"
              className={classes.icon}
            >
              {linkedinIcon}
            </a>
            <a href="mailto:soozin@gmail.com" className={classes.icon}>
              {gmailIcon}
            </a>
            <a href={pdf} className={classes.icon}>
              {downloadIcon}
            </a>
            <div className={classes.copyright}>
              &copy; 2024 SOOJIN PARK | Full Stack Web Developer
            </div>
          </div>
        </div>
      </div>

      <div className={classes.rightContainer}>
        <div className={classes.mainContainer}>
          <div className={classes.resumeDownload}>
            <a href={pdf} className={classes.resumeLink}>
              {downloadIcon}
              <span> </span> My Resume
            </a>
          </div>
          <div className={classes.mainTitle}>About me</div>
          <div className={classes.mainContent}>
            Full Stack Web Developer with 3 years of experience in building
            dynamic websites and applications using a variety of technologies, including{" "}
            <strong>
              React.js | JavaScript | jQuery | Node.js | MongoDB |
              MySQL | Liquid | Figma
            </strong>{" "}
            Skilled in both front-end and back-end development,
            with a passion for learning and intergrating new tools and frameworks. 
            Please feel free to contact me by{" "}
            <a href="mailto:soozin95@gmail.com">email</a> or ping me on{" "}
            <span> </span>
            <a href="https://www.linkedin.com/in/soojin-park-6bb373141/">
              Linkedin
            </a>
            !
          </div>
        </div>
        <hr className={classes.divider} />

        <div className={classes.projectContainer}>
          <div className={classes.projectTitle}>Projects</div>
          <div className="row mx-5">
            {projects.map((project, i) => (
              <div className="col-md-6">
                <Card className={classes.card}>
                  <a href={project.url}>
                    <Card.Img variant="top" src={picArr[i]} />
                  </a>
                </Card>
                <Card.Body>
                  <Card.Title className={classes.cardTitle}>
                    {project.name}
                  </Card.Title>
                  <div className={classes.technologies}>
                    {project.technologies}
                  </div>
                </Card.Body>
              </div>
            ))}
          </div>
          <hr className={classes.divider} />
          <div className={classes.skills}>
            {skillArr.map((skill, i) => (
              <img src={skillArr[i]} className={classes.skill} />
            ))}
            <div>
              {skillArr2.map((skill, i) => (
                <img src={skillArr2[i]} className={classes.skill} />
              ))}
            </div>
          </div>
        </div>
        <div
          class="container mt-5"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <div className={classes.footer}>
            <p className="text-end mt-3 text-muted">&copy; 2024 SOOJIN PARK</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
