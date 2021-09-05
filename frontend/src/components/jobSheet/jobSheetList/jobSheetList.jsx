import React, { Component } from "react";
import styles from "../jobSheetList/jobSheetList.module.css";
import SearchIcon from "@material-ui/icons/Search";

class jobSheetList extends Component {
  state = {};

  jobSheetMain = () => {
    this.props.history.push("/jobSheetMain");
  };

  render() {
    return (
      <>
        <h2>Job Sheet List</h2>
        <div className={styles.addButton}>
          <button className="btn btn-primary" onClick={this.jobSheetMain}>
            Add Job Sheet
          </button>
          <div className={styles.searchBar}>
            <input
              type="text"
              id="header-search"
              placeholder="Search "
              name="s"
            />
            <div className={styles.searchBarImage}>
              <button onClick={this.search}>
                <SearchIcon />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.table}>
          <div className="table  table-bordered">
            <thead>
              <th>Customer Name</th>
              <th>Customer Name</th>
              <th>Customer Name</th>
              <th>Customer Name</th>
              <th>Customer Name</th>
              <th>Customer Name</th>
            </thead>
          </div>
        </div>
      </>
    );
  }
}

export default jobSheetList;
