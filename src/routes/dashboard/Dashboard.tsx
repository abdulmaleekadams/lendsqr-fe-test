import { useState, useEffect } from "react";
import { redirect } from "react-router-dom";

import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import "./dashboard.scss";
import UserTable from "../../components/userTable";
import UserLogin from "../userLogin/UserLogin";

const Dashboard: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  if (!isLoggedIn) {
    return <UserLogin />;
  }

  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
      <div className="content">
        <>
          <UserTable />
        </>
      </div>
    </div>
  );
};

export default Dashboard;
