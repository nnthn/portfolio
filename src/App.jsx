import React from 'react';
import Socials from "./components/Socials.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import downloadBtn from "./assets/download.svg";
export default function App(){
    return (
        <div>
          <Navbar />
          <main className="content">
            <section className="home" id="home">
              <h3 className="desig">I'm</h3>
              <h2 className="heading">Ananthakrishnan P</h2>
              <p className="desc-p">
                I'm a beginner software developer with a knack for creating cool stuff. I've dabbled in designing and programming.
              </p>
              <button className="resume-btn">Resume<img src={downloadBtn} alt="download btn"/></button>
            </section>
            <section className="about" id="about">
              <h3 className="desig">Hi, I'm</h3>
              <h2 className="heading" id="nnthn"></h2>
              <p className="desc-p">
               I'm a B-Tech Computer Science student from Kerala. I am a beginner software developer, mostly focused in frontend and fullstack development. I am passionate towards development of websites and webapps. I am also a beginner at other languages as C, Java, Javascript and SQL. I have some knowledge on frameworks on javascript like ReactJS, ExpressJS as well. I have done some projects that include a small Hotel Management app and a Billing app. The Hotel Management app was a web based app and the Billing app was an android app. 
              </p>
            </section>
            <section className="skills" id="skills">
              <h3 className="desig">My</h3>
              <h2 className="heading">Skills</h2>
              <p className="desc-p">
                <h4>Here are a few technologies that i have worked with recently</h4>
                <ul className="skill-list">
                  <li>Html</li>
                  <li>Css</li>
                  <li>JavaScript</li>
                  <li>Java</li>
                  <li>C</li>
                  <li>SQL</li>
                  <li>React</li>
                </ul>
              </p>
            </section>
            <section className="project" id="project"> will be here shortly....</section>
            <section className="blogs" id="blogs"> will be here shortly....</section>
            <section className="contact" id="contact"> will be here shortly....</section>
          </main>
          <Socials />
        </div>

    );
}
