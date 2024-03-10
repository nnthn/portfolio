import React from 'react';
import "./navbar.css";
import {useState ,useEffect } from "react";
import 'intersection-observer';

export default function Navbar(){
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
    );
}
