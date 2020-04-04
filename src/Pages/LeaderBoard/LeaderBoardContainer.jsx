import React, { Component } from "react";
import logo from "../../logo.svg";

class LeaderBoardContainer extends Component {
  render() {
    return (
      <div className="container mt-3 min-h-100">
        <div className="main_title_2">
          <h2>LeaderBoard</h2>
        </div>
        <div className="wrap-table100">
          <div className="table100 ver1 m-b-110">
            <div className="table100-head">
              <table>
                <thead>
                  <tr className="row100 head">
                    <th className="cell100 column1">Class name</th>
                    <th className="cell100 column2">Type</th>
                    <th className="cell100 column3">Hours</th>
                    <th className="cell100 column4">Trainer</th>
                    <th className="cell100 column5">Spots</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="table100-body">
              <table>
                <tbody>
                  <tr className="row100 body">
                    <td className="cell100 column1">
                      <img src={logo} className="avatar mr-2" alt="avatar" />{" "}
                      UserName
                    </td>
                    <td className="cell100 column2">Boxing</td>
                    <td className="cell100 column3">9:00 AM - 11:00 AM</td>
                    <td className="cell100 column4">Aaron Chapman</td>
                    <td className="cell100 column5">10</td>
                  </tr>
                  <tr className="row100 body">
                  <td className="cell100 column1">
                      <img src={logo} className="avatar mr-2" alt="avatar" />{" "}
                      UserName
                    </td>
                    <td className="cell100 column2">Yoga</td>
                    <td className="cell100 column3">8:00 AM - 9:00 AM</td>
                    <td className="cell100 column4">Adam Stewart</td>
                    <td className="cell100 column5">15</td>
                  </tr>
                  <tr className="row100 body">
                  <td className="cell100 column1">
                      <img src={logo} className="avatar mr-2" alt="avatar" />{" "}
                      UserName
                    </td>
                    <td className="cell100 column2">Gym</td>
                    <td className="cell100 column3">9:00 AM - 10:00 AM</td>
                    <td className="cell100 column4">Aaron Chapman</td>
                    <td className="cell100 column5">10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeaderBoardContainer;
