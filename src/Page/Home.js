import React from "react";
import profile from "../Assets/ProfileImg.png";
import pdf from "../Assets/Soojin_Park_Resume.pdf";
import projects from "../Data/projectData";

import projectImg0 from "../Assets/Mediclo.jpg";
import projectImg1 from "../Assets/Simplejobs.png";
import projectImg2 from "../Assets/AmazingBreweries.png";
import projectImg3 from "../Assets/IdealTypeFinder.png";
import projectImg4 from "../Assets/UnionNailSalon.png";
import projectImg6 from "../Assets/betaboulders.jpg";

import classes from "../Page/Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const icons = {
    github: <FontAwesomeIcon icon={faGithub} />,
    linkedin: <FontAwesomeIcon icon={faLinkedin} />,
    email: <FontAwesomeIcon icon={faEnvelope} />,
    download: <FontAwesomeIcon icon={faFileArrowDown} />,
  };

  const projectImages = [projectImg1, projectImg2, projectImg3, projectImg4];

  return (
    <div className={classes.container}>
      {/* Left Side */}
      <div className={classes.leftContainer}>
        <div className={classes.leftContent}>
          <img src={profile} alt="Profile" className={classes.profileImg} />

          <div className={classes.introductionTitle}>Hello! I'm Soo Park</div>
          <div className={classes.introductionContent}>
            <span>a Full Stack Web Developer</span> based in Los Angeles with 4 years of experience
            <br />
            building creative & functional web applications.
          </div>

          <div className={classes.iconContainer}>
            <a href="https://www.linkedin.com/in/soojin-park-dev/" className={classes.icon}>
              {icons.linkedin}
            </a>
            <a href="mailto:soozin@gmail.com" className={classes.icon}>
              {icons.email}
            </a>
            <a href="https://github.com/sooparc" className={classes.icon}>
              {icons.github}
            </a>
            <a href={pdf} className={classes.icon}>
              {icons.download}
            </a>

            <div className={classes.copyright}>
              &copy; 2025 SOOJIN PARK | Full Stack Web Developer
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className={classes.rightContainer}>
        <div className={classes.resumeDownload}>
          <a href={pdf} className={classes.resumeLink}>
            {icons.download} <span style={{ marginLeft: "5px" }}>My Resume</span>
          </a>
        </div>

        {/* About Me */}
        <div className={classes.contentContainer}>
          <div className={classes.contentHeading}>About me</div>
          <div className={classes.contentText}>
            I build seamless, high-performing web applications that solve real business problems.
            With expertise in both front-end and back-end development, I create custom features that
            elevate user experience and meet business goals. I move fast, adapt quickly, and thrive
            on turning ideas into functional, optimized solutions. I’m driven by the challenge of
            building smarter, cleaner, and more impactful web experiences.
          </div>
        </div>

        <hr className={classes.divider} />

        {/* Work Experience */}
        <div className={classes.contentContainer}>
          <div className={classes.contentHeading}>Work</div>

          {/* Mediclo */}
          <div className={classes.workContainer}>
            <div className={classes.workImgContainer}>
              <a href="https://mediclo.com">
                <img src={projectImg0} alt="Mediclo" />
              </a>
            </div>
            <div className={classes.workTextContainer}>
              <a href="https://mediclo.com">
                <p className={classes.workHeading}>Mediclo</p>
              </a>
              <ul className={classes.customBullets}>
                <li>Led all technical development and maintenance of this Shopify Plus store.</li>
                <li>
                  Built custom features like product bundling, embroidery personalization, and
                  solutions that bypass Shopify’s 100-variant limit.
                </li>
                <li>
                  Optimized SEO and site performance to improve search visibility and load speed.
                </li>
                <li>
                  Integrated third-party apps to expand store functionality while ensuring smooth
                  performance.
                </li>
                <li>Managed GA4 and Meta Pixel setup for robust conversion tracking.</li>
                <li>
                  Created optimized landing pages for email campaigns and Meta ads to boost
                  engagement and drive conversions.
                </li>
              </ul>
            </div>
          </div>

          {/* Betaboulders */}
          <div className={classes.workContainer}>
            <div className={classes.workImgContainer}>
              <img src={projectImg6} alt="Betaboulders" />
            </div>
            <div className={classes.workTextContainer}>
              <p className={classes.workHeading}>Betaboulders</p>
              <ul className={classes.customBullets}>
                <li>
                  Converted a jQuery frontend application to React.js, enhancing maintainability and
                  performance.
                </li>
                <li>
                  Developed and tested key Gym Account features, including the Gym Portal, Print
                  Beta Tags, and Route Management.
                </li>
                <li>
                  Troubleshot and debugged various production issues to maintain system stability
                  and improve overall application reliability.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className={classes.divider} />

        {/* Projects */}
        <div className={classes.contentContainer}>
          <div className={classes.contentHeading}>Projects</div>
          <div className={classes.cardContainer}>
            {projects.map((project, i) => (
              <div className={classes.cardContentContainer} key={project.name}>
                <a href={project.url}>
                  <img
                    src={projectImages[i]}
                    alt={project.name}
                    className={classes.cardImg}
                  />
                </a>
                <div className={classes.cardBody}>
                  <h5 className={classes.cardTitle}>{project.name}</h5>
                  <div className={classes.technologies}>{project.technologies}</div>
                </div>
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
