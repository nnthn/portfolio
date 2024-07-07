import attimg from "../assets/attendify.svg";
import figma from "../assets/figma.svg";
export default function Uicard(props){
    return (
        <div>
          <div className="card uicard">
            <div className="item-content">
              <img src={props.img} alt="att img" className="Ui-img"/>
              <h3 className="ui-title">{props.title}</h3>
              <h4 className="ui-desc">UIUX design for an attendance marking app</h4>
              <img className="figma" src={figma}/>
            </div>
          </div>
        </div>

    );
    
}
