import React from "react";
import "./Sidebar.css";
import Buttons from "./UI/Buttons";

const Sidebar = ({ userData, onLogout, currentPage, setCurrentPage }) => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Hello, {userData.userName}</h2>
      <div>
        <ul className="sidebar-categories">
          <li onClick={() => setCurrentPage("food")}>FOOD</li>
          <li onClick={() => setCurrentPage("beverages")}>BEVERAGES</li>
          <li onClick={() => setCurrentPage("grocery")}>GROCERY</li>
          <li onClick={() => setCurrentPage("dairy")}>DAIRY</li>
          <li onClick={() => setCurrentPage("snacks")}>SNACKS</li>
          <li onClick={() => setCurrentPage("gas")}>GAS</li>
          {userData.role!='admin' && (
            <li onClick={() => setCurrentPage("your-orders")}>YOUR ORDERS</li>
          )}
          {userData.role==='admin' && (
            <li onClick={() => setCurrentPage("all-orders")}> ORDERS</li>
          )}
          {userData.role==='admin' && (
            <li onClick={() => setCurrentPage("all-users")}> USERS</li>
          )}
        </ul>
      </div>
      <div className="sidebar-footer">
        <p className="user-details">{userData.userEmail}</p>
        <Buttons onClick={onLogout} >Logout</Buttons>
      </div>
    </div>
  );
};

export default Sidebar;
