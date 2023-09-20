import classes from "./StudyMaterials.module.css";


import doc  from "./doc.png"

import { BiEdit } from "react-icons/bi";
import { AiOutlineFilePdf, AiOutlineFilePpt } from "react-icons/ai";;

function StudyMaterials() {
  return (
    <div className={classes.parentContainer}>
      <div className={classes.instituteBar}>
        <i className={classes.titleSpace}>
          <span>
            <i>STUDY MATERIALS and NOTES</i>

            <button className={classes.uploadButton}>
              {" "}
              <b>+ Upload </b>{" "}
            </button>
          </span>
          <button className={classes.editButton}>
           Edit
          </button>
        </i>

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
