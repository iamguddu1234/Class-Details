import classes from "./ChapterNTopics.module.css";

import { BiEdit } from "react-icons/bi";

function ChapterNTopics() {
  return (
    <div className={classes.parentContainer}>
      <div className={classes.instituteBar}>
        <div className={classes.topbar}>
          <div className={classes.ChapterntopicsTitle}>Chapter And Topics</div>

          <button className={classes.editBtn}>Edit</button>
        </div>

        <div className={classes.Maincontainer}>
          <div className={classes.classTitle}>Law Of Motion</div>
          <div className={classes.classDetails}>
            Newton's laws of motion are three basic laws of classical mechanics
            that describe the relationship between the motion of an object and
            the forces acting on it.
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChapterNTopics;
