import React from "react";
import Logo from "../../assets/apton.jpg";
import Img from "../../assets/img.svg";
import Feeds from "../../assets/feeds.svg";
import To from "../../assets/to-do.svg";
import Salary from "../../assets/salary.svg";
import Leave from "../../assets/leave.svg";
import Attendance from "../../assets/attendance.svg";
import Document from "../../assets/document.svg";
import People from "../../assets/people.svg";
import Help from "../../assets/helpdesk.svg";
import Workflow from "../../assets/workflow.svg";
import Profile from "../../assets/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import '../nav/Sidebar.css'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <article className="article">
        <img src={Logo} alt="Logo"></img>
        <div>
          <img src={Profile} alt="Profile"></img>
          <div>
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

export default Nav;
