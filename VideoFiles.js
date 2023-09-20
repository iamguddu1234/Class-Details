import classes from "./VideoFiles.module.css";
import { BiEdit } from "react-icons/bi";
import VideoClickBox from "./VideoClickBox";

function VideoFiles() {
  return (
    <div className={classes.parentContainer}>
      <div className={classes.instituteBar}>
        <div className={classes.topBar}>
          <div className={classes.leftContainer}>
            <div className={classes.mainTitle}>Video Lectures</div>

            <button className={classes.uploadButton}>+ Upload</button>
          </div>
          <button className={classes.editButton}>Edit</button>
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
