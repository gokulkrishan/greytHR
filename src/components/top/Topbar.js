import React from "react";
import "../top/Topbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Topbar = (props) => {
  const { currentPage } = props;
  return (
    <div className="top">
      <div>
        <div className="svg">
          <div _ngcontent-dlx-c406="" className="rect"></div>
          <div _ngcontent-dlx-c406="" class="circle"></div>
        </div>
        <h4>{currentPage}</h4>
      </div>
      <div className="links">
        <h3>Quick links</h3>
        <FontAwesomeIcon icon={faBell} className="icon" />
      </div>
    </div>
  );
};

export default Topbar;
