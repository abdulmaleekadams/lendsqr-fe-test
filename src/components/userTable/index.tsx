import { useState, useEffect } from "react";
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
import ReactPaginate from "react-paginate";
import UserFilter from "../userFilter/userFilter";

type Props = {
  setStatusHandler: any;
  usersList: any[];
  viewDetails?: boolean;
};

type User = {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  date_joined: string;
  status: string;
  createdAt: string;
};

const generateStatus = () => {
  const options = ["Active", "Inactive", "Pending"];
  return options[Math.floor(Math.random() * options.length)];
};

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [activePage, setActivePage] = useState<number>(0);
  const [usersCount, setUsersCount] = useState<number>(0);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [allUsers, setAllUsers] = useState<User[]>([])

  let limit = 9;

  useEffect(() => {
    const usersDetailsURL: string =
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users#";

    // API call to get user data
    const getUsersList = async (start: number) => {
      const res = await fetch(usersDetailsURL);
      const data: User[] = await res.json();

      const total = data.length;
      setTotalUsers(total);



      setAllUsers(
        data.map(user => ({
          ...user, status: generateStatus()
        }))
      
      )

      const paginatedList: any[] = [
        ...data.slice(limit * start, (start + 1) * limit),
      ];

      setUsers(
        paginatedList.map((user,idx) => ({
          ...user,
          status: generateStatus(),
        }))
      );

      setPageCount(Math.ceil(total / limit));
      const usersShown =
        paginatedList.length === limit
          ? activePage * limit + paginatedList.length
          : pageCount * limit - (limit - paginatedList.length);
      setUsersCount(usersShown);
    };

    getUsersList(activePage);
  }, [activePage, limit, pageCount]);

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

  const [viewUserDetails, setViewUserDetails] = useState<boolean>(false);
  const [userId, setuserId] = useState<number>(-1);
  const [viewUserOption, setViewUserOption] = useState<boolean>(false);
  const [filter, setFilter] = useState<boolean>(false)

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
    setViewUserDetails(false);
  };

  const userOption: any = (index: number) => {
    setuserId(index);
    setViewUserOption(!viewUserOption);
  };

  const viewUser = () => {
    setViewUserDetails(!viewUserDetails);
  };

  const blacklistUser = (id: number) => {
    const updatedUsers = [...users];
    updatedUsers[id].status = "Blacklisted";
    setUsers(updatedUsers);
  };

  const activateUser = (id: number) => {
    const updatedUsers = [...users];
    updatedUsers[id].status = "Active";
    setUsers(updatedUsers);
  };

  const handleUserListTable = async (data: any) => {
    let currentPage = data.selected;
    setActivePage(currentPage);
  };

  const handleViewFilter = () => {
    setFilter(!filter)
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
                <Filter onClick={handleViewFilter} />
              </div>
            ))}
          </div>
        )}
        <div
          className={`userTableBody flexCol`}
          onClick={() => setViewUserOption(false)}
        >
          {filter && !viewUserDetails && <UserFilter users={allUsers} setFilteredUsers={setUsers} />}
          {users?.map((user, idx: number) => (
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
                  <div className={`status flexCenter ${user.status}`}>
                    <p>{user.status}</p>
                  </div>
                  <div
                    className={`detailsButton ${idx}`}
                    onClick={() => userOption(idx)}
                    onMouseEnter={() => userOption(idx)}
                  >
                    <Dots />
                  </div>
                  {userId === idx && viewUserOption ? (
                    <UserOption
                      id={idx}
                      activateUser={activateUser}
                      blacklistUser={blacklistUser}
                      viewUser={viewUser}
                    />
                  ) : (
                    ""
                  )}
                </div>
              )}
              {viewUserDetails && userId === idx && (
                <UserDetails
                  userRecord={users[userId]}
                  returnDashboard={returnDashboard}
                />
              )}
            </>
          ))}
        </div>
      </div>
      <div className="flexBetween paginationContainer">
        <div>
          Showing {usersCount} out of {totalUsers}
        </div>
        <ReactPaginate
          breakLabel="..."
          pageCount={pageCount}
          nextLabel=">"
          previousLabel="<"
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          onPageChange={handleUserListTable}
          containerClassName="pagination flex"
          pageClassName="pageItem"
          pageLinkClassName="pageLink"
          previousClassName="pageButton"
          nextClassName="pageButton"
          nextLinkClassName="pageLink"
          breakClassName="pageItem"
          breakLinkClassName="pageLink"
          activeClassName="active"
        />
      </div>
    </>
  );
};

export default UserTable;
