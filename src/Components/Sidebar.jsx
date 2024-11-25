import React from "react";
import "./Sidebar.css";

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
          {!userData.isAdmin && (
            <li onClick={() => setCurrentPage("your-orders")}>YOUR ORDERS</li>
          )}
          {userData.isAdmin && (
            <li onClick={() => setCurrentPage("all-orders")}> ORDERS</li>
          )}
          {userData.isAdmin && (
            <li onClick={() => setCurrentPage("all-users")}> USERS</li>
          )}
        </ul>
      </div>
      <div className="sidebar-footer">
        <p className="user-details">{userData.userEmail}</p>
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
