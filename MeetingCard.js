import classes from "./MeetingCard.module.css";
import { BsLink45Deg } from "react-icons/bs";

function MeetingCard() {
  return (
    <div className={classes.parentsCard}>



      <div className={classes.mainParentCard}>
        <div className={classes.mainContainer}>
          <div className={classes.meetingText}>Meeting Link :</div>

          <button className={classes.copyLinkBtn}>
            <BsLink45Deg />
            <div className={classes.copyText}>Copy</div>
          </button>
        </div>

        <button className={classes.JoinClassButton}>Join Class</button>
      </div>

      <button className={classes.mettingLinkUrl}>https://app.diracai.com/video/meet.24.1695365080325.81.58574275809029
      </button>
    </div>
  );
}
export default MeetingCard;
