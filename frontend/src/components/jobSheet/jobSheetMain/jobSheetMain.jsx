import React, { Component } from "react";
import styles from "./jobSheetMain.module.css";
import { useHistory } from "react-router-dom";

class JobSheetMain extends Component {
  state = {};

  jobParts = () => {
    window.open("/jobParts");
  };

  render() {
    return (
      <div>
        <h2>Job Sheet</h2>
        <button className="btn btn-primary" onClick={this.jobParts}>
          CLICK HERE TO GET THE ITEM CODE
        </button>
        <div className="container p-3 my-3 bg-light border border-dark ">
          <form className={styles.form}>
            <div className={styles.input_group}>
              <label>Customer Name:</label>
              <input placeholder="Customer Name" name="firstName" />
            </div>
            <div className={styles.input_group}>
              <label>Customer NIC:</label>
              <input placeholder="Customer NIC" name="lastName" />
            </div>
            <div className={styles.input_group}>
              <label>Vehicle Id:</label>
              <input placeholder="Vehicle Id" name="lastName" />
            </div>
            <div className={styles.input_group}>
              <label>Contact Number:</label>
              <input placeholder="Contact Number" name="lastName" />
            </div>
            <div className={styles.input_group}>
              <label>Date:</label>
              <input type="Date" placeholder="Date" name="lastName" />
            </div>
            <div className={styles.input_group}>
              <label>Time:</label>
              <input placeholder="Time" name="lastName" />
            </div>
            <div className={styles.frontSide}>
              <h4>
                <u>FRONT SIDE</u>
              </h4>
              <label>Front(Usable):</label>
              <input placeholder="Eg:#----/#----" name="lastName" />
              <div>
                <label>Front(Replace):</label>
                <input placeholder="Eg:#----/#----" name="lastName" />
              </div>
            </div>
            <div className={styles.rearSide}>
              <h4>
                <u>REAR SIDE</u>
              </h4>
              <label>Rear(Usable):</label>
              <input placeholder="Eg:#----/#----" name="lastName" />
              <div>
                <label>Rear(Replace):</label>
                <input placeholder="Eg:#----/#----" name="lastName" />
              </div>
            </div>
            <div className={styles.leftrightSide}>
              <h4>
                <u>LEFT/RIGHT SIDE</u>
              </h4>
              <label>Left/Right(Usable):</label>
              <input placeholder="Eg:#----/#----" name="lastName" />
              <div>
                <label>Left/Right(Replace):</label>
                <input placeholder="Eg:#----/#----" name="lastName" />
              </div>
            </div>
            <div className={styles.topSide}>
              <h4>
                <u>TOP SIDE</u>
              </h4>
              <label>Top(Usable):</label>
              <input placeholder="Eg:#----/#----" name="lastName" />
              <div>
                <label>Top(Replace):</label>
                <input placeholder="Eg:#----/#----" name="lastName" />
              </div>
            </div>
            <div className={styles.engineRoom}>
              <h4>
                <u>ENGINE ROOM</u>
              </h4>
              <label>Engine Room(Usable):</label>
              <input placeholder="Eg:#----/#----" name="lastName" />
              <div>
                <label>Engine Room(Replace):</label>
                <input placeholder="Eg:#----/#----" name="lastName" />
              </div>
            </div>
            <div className={styles.bottomSide}>
              <h4>
                <u>BOTTOM SIDE</u>
              </h4>
              <label>Bottom(Usable):</label>
              <input placeholder="Eg:#----/#----" name="lastName" />
              <div>
                <label>Bottom(Replace):</label>
                <input placeholder="Eg:#----/#----" name="lastName" />
              </div>
            </div>
            <div className={styles.saveButton}>
              <button className="btn btn-secondary">Save</button>
            </div>
            <div className={styles.cancelButton}>
              <button className="btn btn-secondary">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default JobSheetMain;
