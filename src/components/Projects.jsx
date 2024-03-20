import  Card from "./ProjectCard.jsx";
import Uicard from "./Uicard.jsx";
import attimg from "../assets/attendify.svg";
import smartpay from "../assets/smartpay.svg";
import "./cards.css";
export default function Projects(){
    return (
        <div>
          <h3 className="sub-title">Software</h3>
          <div className="projects-container">
            <Card Pname="Smart Pay" desc="A billing app" lan="Dart"/>
            <Card Pname="Attendify" desc="An attendance manager" lan="Js html css"/>
            <Card Pname="Hotel Manager" desc="A hotel booking app" lan="html css"/>
            <Card Pname="Demand forecasting" desc="Under development" lan="python html css js"/>
          </div>
          <h3 className="sub-title">UI/UX</h3>
          <div className="projects-container">
            <Uicard title="Attendify" img={attimg}/>
            <Uicard title="Smart Pay" img={smartpay}/>
          </div>
        </div>
    );
}
