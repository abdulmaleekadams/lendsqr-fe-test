import React, { useEffect, useState } from "react";
import { Dots, Filter } from "../../assets/icons";
import "./index.scss";
const UserTable = () => {
  const tableHeader = [
    "organization",
    "username",
    "email",
    "phone number",
    "date joined",
    "status",
  ];

  const usersURL =
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users#";

  const [userData, setUserData] = useState<any>();
  const [loading, setLoading] = useState(true);

  const fetchUserData = async (URL: string) => {
    try {
      const response = await fetch(URL, { method: "GET" });
      const data: [] = await response.json();
      setUserData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(!loading);
    }
  };

  useEffect(() => {
    fetchUserData(usersURL);
  });

  //   type UserProps = {
  //     user: { orgName: string; userName: string; email: string; phone: string };
  //   };

  return (
    <div className="userTable">
      <div className="userTableHeader flex">
        {tableHeader.map((title) => (
          <div className={`flex title ${title.split(" ")[0]}`}>
            <p>{title}</p>
            <Filter />
          </div>
        ))}
      </div>

      <div className="userTableBody flexCol">
        {userData?.map(
          (user: {
            orgName: string;
            userName: string;
            email: string;
            phoneNumber: string;
          }) => (
            <div className="details flex">
              <div className="organization">
                <p title={user.orgName}>{user.orgName.substring(0,10)+ (user.orgName.length > 10 ? ".." : '')}</p>
              </div>
              <div className="username">
                <p title={user.userName}>{user.userName}</p>
              </div>
              <div className="email">
                <p title={user.email}>{user.email.substring(0,20) + (user.email.length > 20 ? ".." : '')}</p>
              </div>
              <div className="phone">
                <p>{user.phoneNumber.substring(0,12)}</p>
              </div>
              <div className="date">
                <p>{`May 15, 2020 10:00 AM`}</p>
              </div>
              <div className="status flexCenter">
                <p>{`Inactive`}</p>
              </div>
              <div className="detailsButton">
                <Dots />
              </div>
            </div>
          )
        )}
      </div>

      <div className="userTableDetails"></div>
    </div>
  );
};

export default UserTable;
