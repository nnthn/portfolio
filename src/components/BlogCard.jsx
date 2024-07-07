import "./blogcard.css";

export default function BlogCard(props){
    return (
        <div className="blog-card">
          <h2 className="blog-name">{props.name}</h2>
          <h4 className="blog-desc">{props.desc}</h4>
        </div>
    );
}
