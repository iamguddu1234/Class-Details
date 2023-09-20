import classes from "./MeetingCard.module.css";
import { BsLink45Deg } from "react-icons/bs";


function MeetingCard() {
  return (
    <div className={classes.parentsCard}>
      <div className={classes.mainContainer}>
        <div className={classes.meetingText}>Meeting Link :</div>

        <div className={classes.copyLinkBtn}>
        <BsLink45Deg/>
          <div className={classes.copyText}>Copy</div>
        </div>
      </div>

      <div className={classes.JoinClassButton}>Join Class</div>
    </div>
  );
}
export default MeetingCard;
