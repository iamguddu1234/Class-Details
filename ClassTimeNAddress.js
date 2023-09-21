import classes from "./ClassTimeNAddress.module.css";

import { BsLink45Deg } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

import { MdLocationOn } from "react-icons/md";

function ClassTimeNAddress() {
  return (
    <div className={classes.parentContainer}>
      <div className={classes.instituteBar}>
        <div className={classes.topmainContainer}>
          <div className={classes.timenAddressContainer}>
            <div className={classes.timeandAddressIcon}>
              <MdLocationOn />
            </div>

            <div className={classes.timenAddressText}>Time And Address</div>
          </div>

          <button className={classes.editBtnContainer}>
            <BsPencilSquare className={classes.editbutton} />

            <div className={classes.editText}>Edit</div>
          </button>
        </div>

        <div className={classes.mainContainer}>
          <div className={classes.timeandAddressDetails}>
            <div className={classes.timeandAddressContianer}>
              <div className={classes.time}>10.10 AM - </div>
              <div className={classes.Date}>30-10-2023</div>
            </div>

            <div className={classes.addressContainer}>
              <div className={classes.addressLine1}>Room No 504,</div>

              <div className={classes.addressLine2}>Club House,</div>

              <div className={classes.addressLine3}>
                Trident Galaxy Apartment,Bhubhaneshwar
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ClassTimeNAddress;
