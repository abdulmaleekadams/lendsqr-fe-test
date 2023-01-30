import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import "./dashboard.scss";
import UserTable from "../../components/userTable";

const Dashboard = () => {
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
