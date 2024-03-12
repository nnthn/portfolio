import File from "../assets/file.svg";
import Git from "../assets/github-pr.svg";
import "./cards.css";
export default function Card(props){
    return(
        <div className="card">
          <div className="item-content">
            <div className="card-img">
              <img src={File} alt="file imgage"/>
              <img src={Git} alt="github img"/>
            </div>
            <div className="card-desc">
              <h3>{props.Pname}</h3>
              <h4>{props.desc}</h4>
            </div>
          </div>
        </div>
    );
}
