import File from "../assets/file.svg";
import Git from "../assets/github-pr.svg";
import "./cards.css";
export default function Card(){
    return(
        <div className="card">
          <div className="item-content">
            <div className="card-img">
              <img src={File} alt="file imgage"/>
              <img src={Git} alt="github img"/>
            </div>
            <div className="card-desc">
              <h3>Project</h3>
              <h4>Project desc</h4>
            </div>
          </div>
        </div>
    );
}
