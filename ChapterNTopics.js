import classes from "./ChapterNTopics.module.css";

import { BsPencilSquare } from "react-icons/bs";

import { MdListAlt } from "react-icons/md";

function ChapterNTopics() {
  return (
    <div className={classes.parentContainer}>
      <div className={classes.instituteBar}>
        <div className={classes.topbar}>
          <div className={classes.topConatiner}>
            <div className={classes.topicsIcon}>
              <MdListAlt />
            </div>

            <div className={classes.ChapterntopicsTitle}>
              Chapter And Topics
            </div>
          </div>

          <button className={classes.editBtnContainer}>
            <BsPencilSquare className={classes.editbutton} />

            <div className={classes.editText}>Edit</div>
          </button>
        </div>

        <div className={classes.Maincontainer}>
          <div className={classes.classTitle}>Laws Of Motion</div>
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
