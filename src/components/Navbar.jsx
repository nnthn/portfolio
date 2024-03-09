import React from 'react';
import "./navbar.css";
export default function Navbar(){
    return (
        <aside>
          <nav>
            <ul className="sidebar-list">
              <li><a className="shome sidebar-a" id="shome" href="#home" ><span className="nav-indicator"></span><span className="nav-text">Home</span></a></li>
              <li><a className="sabout sidebar-a" id="sabout" href="#about" ><span className="nav-indicator"></span><span className="nav-text">About</span></a></li>
              <li><a className="sskills sidebar-a"  id="sskills" href="#skills"><span className="nav-indicator"></span><span className="nav-text">Skills</span></a></li>
              <li><a className="sproject sidebar-a" id="sproject" href="#project" ><span className="nav-indicator"></span><span className="nav-text">Projects</span></a></li>
              <li><a className="sblogs sidebar-a" id="sblogs" href="#blogs" ><span className="nav-indicator"></span><span className="nav-text">Blogs</span></a></li>
            </ul>
          </nav>
        </aside>
    );
}
