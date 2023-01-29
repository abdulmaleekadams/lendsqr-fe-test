import { useState } from "react";
import {
  AUsers,
  Dots,
  Filter,
  LUsers,
  SUsers,
  TUsers,
} from "../../assets/icons";
import "./index.scss";
import UserOption from "../userOption/userOption";
import UserDetails from "../userDetails/userDetails";
import Card from "../cards";

type Props = {
  setStatusHandler: any;
  usersList: any[];
  viewDetails?: boolean;
};

const UserTable = ({ usersList, viewDetails }: Props) => {
  const tableHeader = [
    "organization",
    "username",
    "email",
    "phone number",
    "date joined",
    "status",
  ];

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

  const userDetails: any = (userId: number) => {
    setViewUserDetails(!viewUserDetails);
    setuserId(userId);
    viewDetails = viewUserDetails;
  };

  const [viewUserDetails, setViewUserDetails] = useState<boolean>(false);
  const [userId, setuserId] = useState<number>(-1);

  const userRecords = [
    {
      title: "users",
      total: 2453,
      icon: <TUsers />,
    },
    {
      title: "active users",
      total: 2453,
      icon: <AUsers />,
    },
    {
      title: "users with loans",
      total: 12453,
      icon: <LUsers />,
    },
    {
      title: "users with savings",
      total: 102453,
      icon: <SUsers />,
    },
  ];

  const returnDashboard: Function = () => {
    setViewUserDetails(false)
  }

  return (
    <>
      {!viewUserDetails && (
        <>
          <h1>Users</h1>
          <div className="flex cardContainer">
            {userRecords.map(
              (user: { title: string; total: number; icon: any }) => (
                <Card
                  icon={user.icon}
                  title={user.title}
                  total={user.total.toLocaleString()}
                  key={user.title}
                />
              )
            )}
          </div>
        </>
      )}
      <div className={`userTable ${viewUserDetails && "unset"}`}>
        {!viewUserDetails && (
          <div className="userTableHeader flex">
            {tableHeader.map((title) => (
              <div className={`flex title ${title.split(" ")[0]}`} key={title}>
                <p>{title}</p>
                <Filter />
              </div>
            ))}
          </div>
        )}
        <div className={`userTableBody flexCol`}>
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
              <>
                {!viewUserDetails && (
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
                    <div
                      className={`detailsButton ${idx}`}
                      onClick={() => userDetails(idx)}
                    >
                      <Dots />
                    </div>
                    <UserOption id={idx} />
                  </div>
                )}
                {viewUserDetails && userId === idx && (
                  <UserDetails userRecord={usersList[idx]} returnDashboard={returnDashboard} />
                )}
              </>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default UserTable;
