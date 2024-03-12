import  Card from "./ProjectCard.jsx";
import "./cards.css";
export default function Projects(){
    return (
        <div className="projects-container">
          <Card Pname="Smart Pay" desc="A billing app"/>
          <Card Pname="Attendify" desc="An attendance manager"/>
          <Card Pname="Hotel Manager" desc="A hotel booking app"/>
          <Card Pname="Demand forecasting" desc="Under development"/>

          
        </div>
    );
}
