import classes from "./ClassTitleBar.module.css";
import { BsCheckCircleFill } from "react-icons/bs";
import {
  BsActivity,
  BsFillBookFill,
  BsPersonVcardFill,
  BsBarChartLineFill,
  BsPencilSquare,
  BsPlusCircle,
  BsFillBookmarkStarFill,
  BsFilterCircle,
  BsFileEarmarkTextFill,
  BsXCircle,
} from "react-icons/bs";

function classTitleBar() {
  return (
    <div className={classes.parentContainer}>
      <div className={classes.headerSection}>
        <div className={classes.classContainer}>
          <div className={classes.classIcon}>
            <BsFillBookFill />
          </div>
          <div className={classes.classTitle}>Course Name : </div>
          <div className={classes.classNa}>Basic of Biology</div>
        </div>

        <div className={classes.statusContainer}>
          <div className={classes.statusIcon}>
            <BsActivity />
          </div>
          <div className={classes.statusTitle}>Course Status : </div>
          <div className={classes.statusName}>Ongoing</div>
        </div>

        <div className={classes.courseContainer}>
          <div className={classes.courseIcon}>
            <BsPersonVcardFill />
          </div>
          <div className={classes.courseTitle}>Course ID : </div>
          <div className={classes.courseName}>1001010</div>
        </div>
      </div>
    </div>
  );
}
export default classTitleBar;
