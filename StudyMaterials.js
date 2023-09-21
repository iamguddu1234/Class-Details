import classes from "./StudyMaterials.module.css";

import doc from "./doc.png";

import { BiEdit } from "react-icons/bi";
import { AiOutlineFilePdf, AiOutlineFilePpt } from "react-icons/ai";

import {
  BsJournalBookmarkFill,
  BsFillJournalBookmarkFill,
  BsFillBookmarkFill,
  BsPencilSquare,
} from "react-icons/bs";

function StudyMaterials() {
  return (
    <div className={classes.parentContainer}>
      <div className={classes.instituteBar}>
        <div className={classes.topContainer}>
          <div className={classes.leftSideContainer}>
            
            <div className={classes.studyIcon}>
              <BsFillBookmarkFill />
            </div>

            <div className={classes.mainTitle}>STUDY MATERIALS and NOTES</div>

            <button className={classes.uploadButton}>+ Upload</button>
          </div>

          <button className={classes.editBtnContainer}>
            <BsPencilSquare className={classes.editbutton} />

            <div className={classes.editText}>Edit</div>
          </button>
        </div>

        <div className={classes.videoMicroContainer}>
          <img src={doc} className={classes.pdfFileIcon} />

          <img src={doc} className={classes.pdfFileIcon} />
          <img src={doc} className={classes.pdfFileIcon} />

          <img src={doc} className={classes.pdfFileIcon} />

          <img src={doc} className={classes.pdfFileIcon} />
          <img src={doc} className={classes.pdfFileIcon} />
          <img src={doc} className={classes.pdfFileIcon} />
        </div>
      </div>
    </div>
  );
}
export default StudyMaterials;
