import profile from "../Assets/ProfileImg.png";
import classes from "../Page/Home.module.css";
import projects from "../Data/projectData";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Card } from "react-bootstrap";
import projectImg0 from "../Assets/Mediclo.jpg";
import projectImg1 from "../Assets/Simplejobs.png";
import projectImg2 from "../Assets/AmazingBreweries.png";
import projectImg3 from "../Assets/IdealType-app.png";
import projectImg4 from "../Assets/UnionNailSalon.png";
import projectImg6 from "../Assets/betaboulders.jpg"
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

import pdf from "../Assets/Soojin_Park_Resume.pdf";

const Home = () => {
  const githubIcon = <FontAwesomeIcon icon={faGithub} />;
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />;
  const gmailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const downloadIcon = <FontAwesomeIcon icon={faFileArrowDown} />;

  let picArr = [
    projectImg1,
    projectImg2,
    projectImg3,
    projectImg4,
  ];

  let skillArr = [skill1, skill2, skill3, skill4, skill5];

  let skillArr2 = [skill6, skill7, skill8, skill9, skill10];

  return (
    <div className={classes.container}>
      <div className={classes.leftContainer}>
        <div className={classes.leftContent}>
          <img src={profile} className={classes.profileImg} />
          <div className={classes.introductionTitle}>Hello! I'm Soo Park</div>
          <div className={classes.introductionContent}>
            <span>a Full Stack Web Developer</span> based in Los Angeles with 4 years of experience<br/>
            building creative & functional web applications.
          </div>

          <div className={classes.iconContainer}>
            <a
              href="https://www.linkedin.com/in/soojin-park-dev/"
              className={classes.icon}
            >
              {linkedinIcon}
            </a>
            <a href="mailto:soozin@gmail.com" className={classes.icon}>
              {gmailIcon}
            </a>
            <a href="https://github.com/sooparc" className={classes.icon}>
              {githubIcon}
            </a>
            <a href={pdf} className={classes.icon}>
              {downloadIcon}
            </a>
            <div className={classes.copyright}>
              &copy; 2025 SOOJIN PARK | Full Stack Web Developer
            </div>
          </div>
        </div>
      </div>

      <div className={classes.rightContainer}>
        <div className={classes.resumeDownload}>
          <a href={pdf} className={classes.resumeLink}>
            {downloadIcon} <span style={{marginLeft: "5px"}}>My Resume</span>
          </a>
        </div>
        <div className={classes.contentContainer}>
          <div className={classes.contentHeading}>About me</div>
          <div className={classes.contentText}>
            I build seamless, high-performing web applications that solve real business problems. 
            With expertise in both front-end and back-end development, I create custom features that elevate user experience and meet business goals. 
            I move fast, adapt quickly, and thrive on turning ideas into functional, optimized solutions. I’m driven by the challenge of building smarter, cleaner, and more impactful web experiences.
          </div>
        </div>
        <hr className={classes.divider} />

        <div className={classes.contentContainer}>
          <div className={classes.contentHeading}>Work</div>
            <div className={classes.workContainer}>
              <div className={classes.workImgContainer}>
                <img src={projectImg0}/>
              </div>
            <div className={classes.workTextContainer}>
              <p className={classes.workHeading}>Mediclo</p>
              <ul className={classes.customBullets}>
                <li>Led all technical development and maintenance of this Shopify Plus store.</li>
                <li>Built custom features like product bundling, embroidery personalization, and solutions that bypass Shopify’s 100-variant limit.</li>
                <li>Optimized SEO and site performance to improve search visibility and load speed.</li>
                <li>Integrated third-party apps to expand store functionality while ensuring smooth performance.</li>
                <li>Managed GA4 and Meta Pixel setup for robust conversion tracking.</li>
                <li>Created optimized landing pages for email campaigns and Meta ads to boost engagement and drive conversions.</li>
              </ul>
            </div>
          </div>
        </div>

         <div className={classes.contentContainer}>
          <div className={classes.workContainer}>
            <div className={classes.workImgContainer}>
              <img src={projectImg6}/>
            </div>
            <div className={classes.workTextContainer}>
              <p className={classes.workHeading}>Betaboulders</p>
              <ul className={classes.customBullets}>
                <li>Converted a jQuery frontend application to React.js, enhancing maintainability and performance.</li>
                <li>Developed and tested key Gym Account features, including the Gym Portal, Print Beta Tags, and Route Management, ensuring seamless user experience and functionality.</li>
                <li>Troubleshot and debugged various production issues to maintain system stability and improve overall application reliability.</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className={classes.divider} />

        <div className={classes.contentContainer}>
          <div className={classes.contentHeading}>Projects</div>
          <div className="row">
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
        </div>

        <hr className={classes.divider} />
          <div className={classes.footer}>
            <p className="text-end mt-3 text-muted">&copy; 2025 SOOJIN PARK</p>
          </div>
  
      </div>
    </div>
  );
};
export default Home;
