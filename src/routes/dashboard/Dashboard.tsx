import React from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import "./dashboard.scss";
import UserTable from "../../components/userTable";

type Props = {
  children?: any;
};

const Dashboard = ({ children }: Props) => {
  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
      <div className="content">
        <UserTable />
      </div>
    </div>
  );
};

export default Dashboard;
