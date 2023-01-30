import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "./dashboard.scss";
import UserTable from "../../components/userTable/UserTable";
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

  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  }

  return (
    <div className="dashboard">
      <Header />
      <Sidebar userLogout={logout}/>
      <div className="content">
        <>
          <UserTable />
        </>
      </div>
    </div>
  );
};

export default Dashboard;
