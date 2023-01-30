import React from "react";
import { Dropdown, Notification } from "../../assets/icons";
import Avatar from "../../assets/images/headerAvatar.png";
import "./index.scss";
import SearchBar from "../searchBar";

const Header: React.FC = () => {
  return (
    <header className="header flexCenter">
      <div className="col-1">
        <img src="/lendsqrlogo.png" alt="Lendsqr logo" />
      </div>
      <SearchBar />
      <div className="col-3 flexCenter">
        <div className="docs">
          <a href="/docs">Docs</a>
        </div>

        <div className="notification">
          <Notification />
        </div>

        <div className="avatar flexCenter">
          <img src={Avatar} alt="User Avatar" />
          <div className="username flexCenter">
            <p>Username</p>
            <Dropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
