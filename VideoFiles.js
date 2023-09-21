import classes from "./VideoFiles.module.css";
import { BiEdit } from "react-icons/bi";
import VideoClickBox from "./VideoClickBox";

import { BsFillCameraVideoFill, BsPencilSquare } from "react-icons/bs";

function VideoFiles() {
  return (
    <div className={classes.parentContainer}>
      <div className={classes.instituteBar}>
        <div className={classes.topBar}>
          <div className={classes.leftContainer}>
            <div className={classes.topContainer}>
              <div className={classes.videoIcon}>
                <BsFillCameraVideoFill />
              </div>

              <div className={classes.mainTitle}>Video Lectures</div>
            </div>

            <button className={classes.uploadButton}>+ Upload</button>
          </div>

          <button className={classes.editBtnContainer}>
            <BsPencilSquare className={classes.editbutton} />

            <div className={classes.editText}>Edit</div>
          </button>
        </div>

        <div className={classes.textInfo}>
          {" "}
          Recorded Video Lectures will appear here{" "}
        </div>

        <div className={classes.videoMicroContainer}>
          <VideoClickBox />

          <VideoClickBox />

          <VideoClickBox />
        </div>
      </div>
    </div>
  );
}
export default VideoFiles;
