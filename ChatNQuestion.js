import classes from "./ChatNQuestion.module.css";
import picture from "./img.jpg";

import UserComment from "./UserComment";

function ChapterNTopics() {
  return (
    <div className={classes.parentConatiner}>
      <div className={classes.instituteBar}>
        <div className={classes.mainTitlte}>All Comments</div>

        <div className={classes.mainContinaer}>
          <img className={classes.pic} src={picture} alt="logo" />

          <input
            type={"text"}
            className={classes.commnetBox}
            placeholder="Add a Comment"
          />
        </div>

        <div className={classes.postButtonContainer}>
          <button className={classes.postButton}>Post</button>
        </div>

        <UserComment />
        <UserComment />
        <UserComment />
        <UserComment />
        <UserComment />
      </div>
    </div>
  );
}
export default ChapterNTopics;
