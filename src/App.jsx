import React from 'react';
import Socials from "./components/Socials.jsx";
import "./components/navbar.css";
import "./App.css";
import downloadBtn from "./assets/download.svg";
import 'intersection-observer';
import {useState ,useEffect } from "react";
export default function App(){
    const [activeSection, setActiveSection] = useState(null);
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };
        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        document.querySelectorAll('section').forEach((section) => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div>
          <aside>
            <nav>
              <ul className="sidebar-list">
                <li className={activeSection === 'home' ? 'active' : ''}><a className="shome sidebar-a" id="shome" href="#home" ><span className="nav-indicator"></span><span className="nav-text">Home</span></a></li>
                <li className={activeSection === 'about' ? 'active' : ''}><a className="sabout sidebar-a" id="sabout" href="#about" ><span className="nav-indicator"></span><span className="nav-text">About</span></a></li>
                <li className={activeSection === 'skills' ? 'active' : ''}><a className="sskills sidebar-a"  id="sskills" href="#skills"><span className="nav-indicator"></span><span className="nav-text">Skills</span></a></li>
                <li className={activeSection === 'project' ? 'active' : ''}><a className="sproject sidebar-a" id="sproject" href="#project" ><span className="nav-indicator"></span><span className="nav-text">Projects</span></a></li>
                <li className={activeSection === 'blogs' ? 'active' : ''}><a className="sblogs sidebar-a" id="sblogs" href="#blogs" ><span className="nav-indicator"></span><span className="nav-text">Blogs</span></a></li>
              </ul>
            </nav>
          </aside>  
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
