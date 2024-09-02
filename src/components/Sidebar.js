import React, { useState } from "react";
import log from "../assets/log.png";
import { useLocation } from "react-router-dom";
import {
  FaThLarge,
  FaUser,
  FaCogs,
  FaList,
  FaBuilding,
  FaCommentDots,
  FaExclamationCircle,
  FaSignOutAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaUserAlt,
} from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = () => {
  const [isBusinessOpen, setBusinessOpen] = useState(false);
  const [isFeedbackOpen, setFeedbackOpen] = useState(false);
  const [isComplaintsOpen, setComplaintsOpen] = useState(false);

  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(location.pathname);

  const handleItemClick = (path) => {
    setSelectedItem(path);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={log} alt="Findigo Logo" />
      </div>
      <ul className="sidebar-menu">
        <li>
          {" "}
          <a
            href="/dashboard"
            onClick={() => handleItemClick("/dashboard")}
            className={selectedItem === "/dashboard" ? "active" : ""}
          >
            <FaThLarge /> Dashboard
          </a>
        </li>
        <li>
          <a
            href="/user"
            onClick={() => handleItemClick("/user")}
            className={selectedItem === "/user" ? "active" : ""}
          >
            <FaUser className="icon" /> User
          </a>
        </li>
        <li>
          {" "}
          <a
            href="/services"
            onClick={() => handleItemClick("/services")}
            className={selectedItem === "/services" ? "active" : ""}
          >
            <FaCogs className="icon" /> Services
          </a>
        </li>
        <li>
          {" "}
          <a
            href="/category"
            onClick={() => handleItemClick("/category")}
            className={selectedItem === "/category" ? "active" : ""}
          >
            <FaList className="icon" /> Category
          </a>
        </li>

        <li>
          <a
            href="#!"
            onClick={() => {
              setBusinessOpen(!isBusinessOpen);
              handleItemClick("/business"); // Set the business section as selected
            }}
          >
            <FaBuilding /> Business {isBusinessOpen ? "▲" : "▼"}
          </a>
          {isBusinessOpen && (
            <ul className="submenu">
              <li>
                {" "}
                <a
                  href="/business/verified"
                  className={
                    selectedItem === "/business/verified" ? "active" : ""
                  }
                  onClick={() => handleItemClick("/business/verified")}
                >
                  <FaCheckCircle /> Verified
                </a>
              </li>
              <li>
                <a
                  href="/business/unverified"
                  className={
                    selectedItem === "/business/unverified" ? "active" : ""
                  }
                  onClick={() => handleItemClick("/business/unverified")}
                >
                  <FaTimesCircle /> Unverified
                </a>
              </li>
            </ul>
          )}
        </li>

        <li>
          <a
            href="#!"
            onClick={() => {
              setFeedbackOpen(!isFeedbackOpen);
              handleItemClick("/feedback"); // Set the feedback section as selected
            }}
          >
            <FaCommentDots /> Feedback {isFeedbackOpen ? "▲" : "▼"}
          </a>
          {isFeedbackOpen && (
            <ul className="submenu">
              <li>
                {" "}
                <a
                  href="/feedback/customer"
                  className={
                    selectedItem === "/feedback/customer" ? "active" : ""
                  }
                  onClick={() => handleItemClick("/feedback/customer")}
                >
                  <FaUserAlt /> Customer
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="/feedback/business"
                  className={
                    selectedItem === "/feedback/business" ? "active" : ""
                  }
                  onClick={() => handleItemClick("/feedback/business")}
                >
                  <FaBuilding /> Business
                </a>
              </li>
            </ul>
          )}
        </li>

        <li>
          <a
            href="#!"
            onClick={() => {
              setComplaintsOpen(!isComplaintsOpen);
              handleItemClick("/complaints"); // Set the complaints section as selected
            }}
          >
            <FaExclamationCircle /> Complaints {isComplaintsOpen ? "▲" : "▼"}
          </a>
          {isComplaintsOpen && (
            <ul className="submenu">
              <li>
                {" "}
                <a
                  href="/complaints/resolved"
                  className={
                    selectedItem === "/complaints/resolved" ? "active" : ""
                  }
                  onClick={() => handleItemClick("/complaints/resolved")}
                >
                  <FaCheckCircle /> Resolved
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="/complaints/unresolved"
                  className={
                    selectedItem === "/complaints/unresolved" ? "active" : ""
                  }
                  onClick={() => handleItemClick("/complaints/unresolved")}
                >
                  <FaTimesCircle /> Unresolved
                </a>
              </li>
            </ul>
          )}
        </li>

        <li>
          <a href="/logout">
            <FaSignOutAlt /> Log Out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
