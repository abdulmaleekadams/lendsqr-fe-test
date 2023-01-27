import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import "./dashboard.scss";
import UserTable from "../../components/userTable";
import Card from "../../components/cards";
import { AUsers, LUsers, SUsers, TUsers } from "../../assets/icons";
import ReactPaginate from "react-paginate";

type Props = {
  children?: any;
};

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

const setStatusRandom: Function = (status: number) => {
  if (status > 0.5) {
    return "Pending";
  } else {
    return "Inactive";
  }
};

const Dashboard = ({ children }: Props) => {
  const [usersList, setUsersList] = useState<any[]>([]);

  const [pageCount, setPageCount] = useState(0);
  const [activePage, setActivePage] = useState<number>(0);
  const [usersCount, setUsersCount] = useState<number>(0);
  const [totalUsers, setTotalUsers] = useState<number>(0)
  let limit = 9;

  useEffect(() => {
    const usersDetailsURL: string =
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users#";

    const getUsersList = async (start: number) => {
      const res = await fetch(usersDetailsURL);
      const data: [] = await res.json();

      const total = data.length;
      setTotalUsers(total)

      const paginatedList: any[] = [
        ...data.slice(limit * start, (start + 1) * limit),
      ];

      setUsersList(paginatedList);

      setPageCount(Math.ceil(total / limit));
      const usersShown =
        paginatedList.length === limit
          ? (activePage * limit) + paginatedList.length
          : pageCount * limit - (limit - paginatedList.length);
      setUsersCount(usersShown)
    };

    getUsersList(activePage);
  }, [activePage, limit, pageCount]);

  const handleUserListTable = async (data: any) => {
    let currentPage = data.selected;
    setActivePage(currentPage);
  };

  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
      <div className="content">
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
        <UserTable setStatusHandler={setStatusRandom} usersList={usersList} />
        <div className="flexBetween paginationContainer">
          <div>Showing {usersCount} out of {totalUsers}</div>
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
        <div>

          <div>
            <div>

            </div>
          Go back
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
