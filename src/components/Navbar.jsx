import React from 'react';
import "./navbar.css";
export default function Navbar(){
    return (
        <aside>
          <nav>
            <ul className="sidebar-list">
              <li><a className="shome" id="shome" href="#home" >Home</a></li>
              <li><a className="sabout" id="sabout" href="#about" >About</a></li>
              <li><a className="sskills"  id="sskills" href="#skills">Skills</a></li>
              <li><a className="sproject" id="sproject" href="#project" >Projects</a></li>
              <li><a className="sblogs" id="sblogs" href="#blogs" >Blogs</a></li>
              <li><a className="scontact" id="scontact" href="#contact">Contact</a></li>
            </ul>
          </nav>
        </aside>
    );
}
