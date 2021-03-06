import profile from "../Assets/ProfileImg.png";
import classes from "../Page/Home.module.css";
import projects from "../Data/projectData";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Card } from "react-bootstrap";
import projectImg1 from "../Assets/PT_Finder_app.png";
import projectImg2 from "../Assets/AmazingBreweries.png";
import projectImg3 from "../Assets/IdealType-app.png";
import projectImg4 from "../Assets/Recipe-app.png";
import projectImg5 from "../Assets/pizzaOrdering-app.png";
import projectImg6 from "../Assets/GreatQuotes-app.png";
import skill1 from "../Assets/javascript.png";
import skill2 from "../Assets/html.jpg";
import skill3 from "../Assets/css.png";
import skill4 from "../Assets/reactjs.jpg";
import skill5 from "../Assets/mysql.png";
import skill6 from "../Assets/firebase.png";
import skill7 from "../Assets/nodejs.png";
import skill8 from "../Assets/mongodb.jpg";

const Home = () => {
  const githubIcon = <FontAwesomeIcon icon={faGithub} />;
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />;
  const gmailIcon = <FontAwesomeIcon icon={faEnvelope} />;

  let picArr = [
    projectImg1,
    projectImg2,
    projectImg3,
    projectImg4,
    projectImg5,
    projectImg6,
  ];

  let skillArr = [
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    skill6,
    skill7,
    skill8,
  ];

  return (
    <div className={classes.body}>
      <div className={classes.leftContainer}>
        <div className={classes.leftContent}>
          <img src={profile} className={classes.profileImg} />
          <div className={classes.introductionTitle}>Hello! I'm Soo Park.</div>
          <div className={classes.introductionContent}>
            <br /> I'm a<span> </span>
            <div className={classes.highlight}>Full Stack Developer</div> living
            in Los Angeles.
            <br /> I enjoy building creative & functional websites.
          </div>

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
        </div>
      </div>

      <div className={classes.rightContainer}>
        <div className={classes.mainContainer}>
          <div className={classes.mainTitle}>Soo Park ??? ?????????</div>
          <div className={classes.mainContent}>
            Hi, my name is Soo Park. Welcome to my journey in full stack web
            development. I enjoy learning and applying new technologies into my
            applications. I believe incorporating new ideas and collaborating
            with different people will lead to new heights and understanding.
            Please feel free to contact me by email or ping me on Linkedin !
          </div>
          <br />
          <div className={classes.mainContent}>
            ???????????????? ?????? ???????????? ??? ????????? ????????? ??????????????????. ?????? ???
            ??????????????? ????????? ????????? ???????????????. ?????? ???????????? ?????? ????????????
            ???????????? ????????? ????????? ????????? ??? ????????????????????? ???????????? ?????? ?????????
            ????????? ????????? ????????????. ???????????? ????????? ????????? ???????????? ????????????
            ?????? ????????? ????????? ??? ?????? ????????? ???????????? ???????????? ?????? ????????????.
            ?????? ?????????????????? ???????????? ?????? ????????? ???????????????????????? :)
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
          <div className={classes.skillTitle}>Skills</div>
          <div className={classes.skills}>
            <div className="row mx-5">
              {skillArr.map((skill, i) => (
                <div className="col-md-3 col-sm-6">
                  <img src={skillArr[i]} className={classes.skill} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          class="container mt-5"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <div className={classes.footer}>
            <p className="text-end mt-3 text-muted">&copy; 2022 SOOJIN PARK</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
