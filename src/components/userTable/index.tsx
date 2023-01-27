import React, { useEffect, useState } from "react";
import { Dots, Filter } from "../../assets/icons";
import "./index.scss";
import UserOption from "../userOption/userOption";

type Props = {
  setStatusHandler: any;
  usersList?: any[];
};

const UserTable = ({ usersList }: Props) => {
  const tableHeader = [
    "organization",
    "username",
    "email",
    "phone number",
    "date joined",
    "status",
  ];

  // const usersURL =
  //   "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users#";

  // const [userData, setUserData] = useState<any>();
  // const [loading, setLoading] = useState(true);

  // const fetchUserData = async (URL: string) => {
  //   try {
  //     const response = await fetch(URL, { method: "GET" });
  //     const data: [] = await response.json();
  //     return setUserData([...data.slice(0, 10)]);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(!loading);
  //   }
  // };

  // useEffect(() => {
  //   fetchUserData(usersURL);
  // });

  const convertDateToString: any = (dateToConvert: string) => {
    return new Date(dateToConvert)
      .toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
      .replace("at", "");
  };

  return (
    <div className="userTable">
      <div className="userTableHeader flex">
        {tableHeader.map((title) => (
          <div className={`flex title ${title.split(" ")[0]}`} key={title}>
            <p>{title}</p>
            <Filter />
          </div>
        ))}
      </div>

      <div className="userTableBody flexCol">
        {usersList?.map(
          (
            user: {
              orgName: string;
              userName: string;
              email: string;
              phoneNumber: string;
              createdAt: string;
              id: number;
            },
            idx: number
          ) => (
            <div className="details flex" key={idx}>
              <div className="organization">
                <p title={user.orgName}>
                  {user.orgName.substring(0, 10) +
                    (user.orgName.length > 10 ? ".." : "")}
                </p>
              </div>
              <div className="username">
                <p title={user.userName}>
                  {user.userName.substring(0, 15) +
                    (user.userName.length > 15 ? ".." : "")}
                </p>
              </div>
              <div className="email">
                <p title={user.email}>
                  {user.email.substring(0, 16) +
                    (user.email.length > 16 ? ".." : "")}
                </p>
              </div>
              <div className="phone">
                <p>{user.phoneNumber.substring(0, 12)}</p>
              </div>
              <div className="date">
                <p>{convertDateToString(user.createdAt)}</p>
              </div>
              <div className="status flexCenter">
                <p>{"pending"}</p>
              </div>
              <div className={`detailsButton ${idx}`}>
                <Dots />
              </div>
              <UserOption id={idx} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default UserTable;
