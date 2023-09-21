import classes from "./InstructorBar.module.css";
import { BsPeopleFill } from "react-icons/bs";

import ProfileImage from "./img.jpg"





function InstructorBar() {
  return (
    <div className={classes.parentContainedr}>
      
      <div className={classes.instructor}>
        <div className={classes.instructorOneData}>
          <div className={classes.profileIconContainer}>
            <img
              className={classes.profileImg}
              src={ProfileImage}
              alt="logo"
            ></img>
          </div>

          <div className={classes.instructorDetailContainer}>
            <div className={classes.title1}>Akshay Dipakrao Bhasme</div>
            <div className={classes.title2}>Top Instructor</div>
            <div className={classes.title3}>Android and Web Designer</div>
            <div className={classes.title4}>1 and Half year Experienced</div>
          </div>
        </div>

        <div className={classes.instructorTwoData}>
          <div className={classes.profileIconContainer}>
            <img
              className={classes.profileImg}
              src={ProfileImage}
              alt="logo"
            ></img>
          </div>

          <div className={classes.instructorDetailContainer}>
            <div className={classes.title1}>Akshay Dipakrao Bhasme</div>
            <div className={classes.title2}>Top Instructor</div>
            <div className={classes.title3}>Android and Web Designer</div>
            <div className={classes.title4}>1 and Half year Experienced</div>
          </div>
        </div>
      </div>

    </div>
  );
}
export default InstructorBar;
