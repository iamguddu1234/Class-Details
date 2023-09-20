import classes from "./PreRequisites.module.css";

import { BiEdit } from "react-icons/bi";

function PreRequisites() {
  return (
    <div className={classes.parentContainer}>
      <div className={classes.instituteBar}>

        <div className={classes.topContainer}>
          <div className={classes.leftContainer}>
            <div className={classes.preTitle}>PreRequisites :</div>

            <div className={classes.notSetTitle}>No Set</div>

          </div>
          <button className={classes.editBtn}>Edit</button>

        </div>

        <div className={classes.bottomContainer}>
          <div className={classes.title}>Scalar And Vector</div>
          <div className={classes.desc}>
            Newton's laws of motion are three basic laws of classical mechanics
            that describe the relationship between
          </div>
        </div>
      </div>
    </div>
  );
}
export default PreRequisites;
