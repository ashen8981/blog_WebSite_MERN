import "./post.css"
import POSTIMG from "../../images/NodeImg1.jpg"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={POSTIMG} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
          </div>
          <span className="postTitle">
          The Importance of Developing Good Habits
          </span>
          <hr/>
          <span className="postDate">
            1 hour ago
          </span>
        </div>
        <p className="postDesc">
            Developing good habits is crucial for success in both personal and professional aspects of life. Habits are automatic behaviors that we repeatedly engage in over time, and they can either work for or against us. Good habits help us to achieve our goals, maintain our health, and live a more fulfilling life.
            One of the most important aspects of developing good habits is consistency. It's not enough to engage in a behavior once in a while or sporadically. To make a habit stick, we need to engage in it consistently over a period of time. This can be challenging, but the more we practice, the easier it becomes.
            Another important aspect of developing good habits is motivation. It's important to identify why we want to develop a particular habit and what benefits it will bring to our lives. For example, if we want to develop a habit of exercising regularly, we need to identify why it's important to us, such as improved health, increased energy, or better mood.
            Accountability is also important when developing good habits. It can be helpful to have a support system or to track our progress to stay on track. Additionally, celebrating small successes along the way can help to keep us motivated and encourage us to keep going.
            In conclusion, developing good habits takes time and effort, but the benefits are worth it. By consistently engaging in behaviors that work for us and align with our goals, we can live a more fulfilling and successful life.
        </p>   
    </div>
  );
}
