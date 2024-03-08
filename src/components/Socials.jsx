import insta from "../assets/insta.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import whatspp from "../assets/whatsp.png";
import "./socials.css";
export default function Socials(){

    return (
        <aside className="socials">
          <nav>
            <ul>
              <li><a href="https://www.instagram.com/an4nthan?igshid=MTNiYzNiMzkwZA==" target="_blank"><img className="social-img"src={insta} alt="insta img"/></a></li>
              <li><a href="https://github.com/nnthn" target="_blank"><img className="social-img"src={github} alt="git img"/></a></li>
              <li><a href="https://www.linkedin.com/in/ananthakrishnan-p-804177221" target="_blank"><img className="social-img"src={linkedin} alt="linkedin img"/></a></li>
              <li><a href="https://wa.me/+918606602466" target="_blank"><img className="social-img"src={whatspp} alt="whatsapp img"/></a></li>
            </ul>
          </nav>
        </aside>
    );
}
