import React from 'react';
import Socials from "./components/Socials.jsx";
import Navbar from "./components/Navbar.jsx";
import Skills from "./components/Skills.jsx";
import Blogs from "./components/Blogs.jsx";
import "./App.css";
import downloadBtn from "./assets/download.svg";
import Resume from "./assets/Ananthakrishnan_P.pdf";
import Projects from "./components/Projects.jsx";

export default function App(){
  
    return (
        <div>
          <Navbar /> 
          <main className="content">
            <section className="home" id="home">
              <h3 className="desig">I'm</h3>
              <h2 className="heading">Ananthakrishnan P</h2>
              <p className="desc-p">
                I'm a beginner software developer with a knack for creating cool stuff.
                <br/><ul> <li>Designer</li><li>Developer</li></ul>
              </p>
              <a href={Resume} download><button className="resume-btn">Resume<img src={downloadBtn} alt="download btn"/></button></a>
            </section>
            <section className="about" id="about">
              <h3 className="desig">Hi, I'm</h3>
              <h2 className="heading" id="nnthn"></h2>
              <p className="desc-p">
               I'm a B-Tech Computer Science student from Kerala. I am a beginner software developer, mostly focused in frontend and fullstack development. I am passionate towards development of websites and webapps. I am also a beginner at other languages as C, Java, Javascript and SQL. I have some knowledge on frameworks on javascript like ReactJS, ExpressJS as well. 
              </p>
            </section>
            <section className="skills" id="skills">
              <h3 className="desig">My</h3>
              <h2 className="heading">Skills</h2>
              <h4>Here are a few technologies that i have worked with recently</h4>
              <Skills />
            </section>
            <section className="project" id="project">
              <h3 className="desig">My</h3>
              <h2 className="heading">Projects</h2>
              <Projects />
            </section>
            <section className="blogs" id="blogs"> 
              <h3 className="desig">My</h3>
              <h2 className="heading">Blogs</h2>
              <Blogs />
            </section>
            <section className="contact" id="contact"> will be here shortly....</section>
          </main>
          <Socials />
        </div>

    );
}
