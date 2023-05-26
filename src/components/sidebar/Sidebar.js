import React from "react";
import Logo from "../../assets/sidebar/apton.jpg";
import Img from "../../assets/sidebar/img.svg";
import Feeds from "../../assets/sidebar/feeds.svg";
import To from "../../assets/sidebar/to-do.svg";
import Salary from "../../assets/sidebar/salary.svg";
import Leave from "../../assets/sidebar/leave.svg";
import Attendance from "../../assets/sidebar/attendance.svg";
import Document from "../../assets/sidebar/document.svg";
import People from "../../assets/sidebar/people.svg";
import Help from "../../assets/sidebar/helpdesk.svg";
import Workflow from "../../assets/sidebar/workflow.svg";
import Profile from "../../assets/sidebar/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav>
      <article className="article">
        <img src={Logo} alt="Logo"></img>
        <div>
          <img src={Profile} alt="Profile"></img>
          <div className="info">
            <h5>Hi Gokul</h5>
            <Link to="information">View My Info</Link>
          </div>
          <FontAwesomeIcon icon={faGear} />
        </div>
        <ul>
          <li>
            <img src={Img} alt="Img"></img>
            <Link to="/">Home</Link>
          </li>
          <li>
            <img src={Feeds} alt="Feeds"></img>
            <Link to="feeds">Feeds</Link>
          </li>
          <li>
            {" "}
            <img src={To} alt="To"></img>To do
          </li>
          <li>
            {" "}
            <img src={Salary} alt="Salary"></img>Salary
          </li>
          <li>
            {" "}
            <img src={Leave} alt="Leave"></img>Leave
          </li>
          <li>
            {" "}
            <img src={Attendance} alt="Attendance"></img>Attendance
          </li>
          <li>
            <img src={Document} alt="Document"></img>
            <Link to="documennt">Documennt Center</Link>
          </li>
          <li>
            <img src={People} alt="People"></img>
            <Link to="people">People</Link>
          </li>
          <li>
            <img src={Help} alt="Help"></img>
            <Link to="helpdesk">Helpdesk</Link>
          </li>
          <li>
            <img src={Workflow} alt="Workflow"></img>
            <Link to="workflow">Workflow Delegates</Link>
          </li>
        </ul>
      </article>
    </nav>
  );
}

export default Sidebar;
