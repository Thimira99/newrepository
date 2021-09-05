import React, { Component } from "react";
import logo from "../../../assets/images/bmw.png";
import "./jobsheetPart.css";

class JobsheetPart extends Component {
  state = {};
  render() {
    return (
      <div className="job">
        <h3 className="title">Job Sheet Parts</h3>
        <br />
        <img className="image" alt="Car Front" src={logo} />
        <div className="container p-3 my-3 bg-dark text-white">
          <p>FRONT SIDE</p>
          <ul>
            <li>
              Headlights
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #HL001
              </span>
            </li>
            <li>
              Signal light Cup
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #SLC002
              </span>
            </li>
            <li>
              Bonnet
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #B003
              </span>
            </li>
            <li>
              Shell/Grill
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #SH004
              </span>
            </li>
            <li>
              Buffer
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #BUF005
              </span>
            </li>
            <li>
              Fog Lights
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #FL006
              </span>
            </li>
            <li>
              Wind Screen
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #WS007
              </span>
            </li>
            <li>
              Number Plate Bracket
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #NPB008
              </span>
            </li>
            <li>
              Wiper Arms
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #WA009
              </span>
            </li>
            <li>
              Horn Set
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #HS010
              </span>
            </li>
            <li>
              Bulbs
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #BULBS011
              </span>
            </li>
          </ul>
        </div>
        <div className="container p-3 my-3 bg-dark text-white">
          <p>REAR SIDE</p>
          <ul>
            <li>
              Break Light Cup
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #BLC001
              </span>
            </li>
            <li>
              Dicky Door
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #DD002
              </span>
            </li>
            <li>
              Back door glass
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #BDG003
              </span>
            </li>
            <li>
              Rear mirror
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #RM004
              </span>
            </li>
            <li>
              Rear buffer
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #RBUF005
              </span>
            </li>
            <li>
              Wiper arms
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #WA006
              </span>
            </li>
            <li>
              Bulbs
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #BULBS007
              </span>
            </li>
          </ul>
        </div>
        <div className="container p-3 my-3 bg-dark text-white">
          <p>LEFT/RIGHT SIDE</p>
          <ul>
            <li>
              Side Mirror(Right)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #SM-R001
              </span>
            </li>
            <li>
              Side Mirror(Left)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #SM-L002
              </span>
            </li>
            <li>
              Side Fenders(Right)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #SF-R003
              </span>
            </li>
            <li>
              Side Fenders(Left)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #SF-L004
              </span>
            </li>
            <li>
              Fender signal lights(Right)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #FSL-R005
              </span>
            </li>
            <li>
              Fender signal lights(Left)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #FSL-L006
              </span>
            </li>
            <li>
              Front door(Right)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #FD-R008
              </span>
            </li>
            <li>
              Front door(Left)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #FD-L009
              </span>
            </li>
            <li>
              Rear door(Right)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #RD-R010
              </span>
            </li>
            <li>
              Rear door(Left)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #RD-L011
              </span>
            </li>
            <li>
              Front Shutter(Right)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #FS-R012
              </span>
            </li>
            <li>
              Front Shutter(Left)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #FS-L013
              </span>
            </li>
            <li>
              Rear Shutter(Right)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #RS-R014
              </span>
            </li>
            <li>
              Rear Shutter(Left)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #RS-L015
              </span>
            </li>
            <li>
              Front Wheel(Right)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #FW-R016
              </span>
            </li>
            <li>
              Front Wheel(Left)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #FW-L017
              </span>
            </li>
            <li>
              Rear Wheel(Right)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #RW-R018
              </span>
            </li>
            <li>
              Rear Wheel(Left)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #RW-L019
              </span>
            </li>
          </ul>
        </div>
        <div className="container p-3 my-3 bg-dark text-white">
          <p>TOP SIDE</p>
          <ul>
            <li>
              Break Light Cup
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #BLC001
              </span>
            </li>
            <li>
              Dicky Door
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #DD002
              </span>
            </li>
            <li>
              Back door glass
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #BDG003
              </span>
            </li>
            <li>
              Rear mirror
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #RM004
              </span>
            </li>
            <li>
              Rear buffer
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #RBUF005
              </span>
            </li>
            <li>
              Wiper arms
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #WA006
              </span>
            </li>
            <li>
              Bulbs
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #BULBS007
              </span>
            </li>
          </ul>
        </div>
        <div className="container p-3 my-3 bg-dark text-white">
          <p>ENGINE ROOM</p>
          <ul>
            <li>
              Radiator
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #R001
              </span>
            </li>
            <li>
              A/C Fan
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #ACF002
              </span>
            </li>
            <li>
              Radiator Fan
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #RF003
              </span>
            </li>
            <li>
              A/C Hose
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #ACH004
              </span>
            </li>
            <li>
              Power Steering Motor
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #PSM005
              </span>
            </li>
            <li>
              Engine
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #E006
              </span>
            </li>
            <li>
              Power Steering hose
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #PSH007
              </span>
            </li>
            <li>
              Alternator
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #ALT007
              </span>
            </li>
            <li>
              Belts
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #B007
              </span>
            </li>
            <li>
              Wipper Motor
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #WM007
              </span>
            </li>
            <li>
              Wipper Washer Tank
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #WWT007
              </span>
            </li>
            <li>
              Engine Mount
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #EM007
              </span>
            </li>
          </ul>
        </div>
        <div className="container p-3 my-3 bg-dark text-white">
          <p>BOTTOM SIDE</p>
          <ul>
            <li>
              Differential
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #D001
              </span>
            </li>
            <li>
              AXIEL / CV Boot(Left)(Inner)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #AX-L-I002
              </span>
            </li>
            <li>
              AXIEL / CV Boot(Left)(Outer)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #AX-L-O003
              </span>
            </li>
            <li>
              AXIEL / CV Boot(Right)(Inner)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #AX-R-I004
              </span>
            </li>
            <li>
              AXIEL / CV Boot(Right)(Outer)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #AX-R-O005
              </span>
            </li>
            <li>
              CV Joints(Left)(Inner)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #CV-L-I006
              </span>
            </li>
            <li>
              CV Joints(Left)(Outer)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #CV-L-O007
              </span>
            </li>
            <li>
              CV Joints(Right)(Inner)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #CV-R-I007
              </span>
            </li>
            <li>
              CV Joints(Right)(Outer)
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #CV-R-O007
              </span>
            </li>
            <li>
              Wipper Motor
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #WM007
              </span>
            </li>
            <li>
              Wipper Washer Tank
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #WWT007
              </span>
            </li>
            <li>
              Engine Mount
              <span style={{ paddingLeft: "40px", color: "#C0C0C0" }}>
                Item Code: #EM007
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default JobsheetPart;
