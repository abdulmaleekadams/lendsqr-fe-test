import { Activate, Blacklist, View } from "../../assets/icons";
import "./index.scss";

type Props = {
  id: number;
  activateUser: Function;
  blacklistUser: Function;
  viewUser: Function;
};

const UserOption = ({ id, activateUser, viewUser, blacklistUser }: Props) => {
  const handleActivate: any = () => {
    activateUser();
  };

  const handleBlacklist: any = () => {
    blacklistUser(id);
  };

  const handleViewUser: any = () => {
    viewUser();
  };

  return (
    <div className={`userOption`}>
      <div onClick={handleViewUser}>
        <View />
        <p>View Details</p>
      </div>
      <div onClick={handleBlacklist}>
        <Blacklist />
        <p>Blacklist User</p>
      </div>
      <div onClick={handleActivate}>
        <Activate />
        <p>Activate User</p>
      </div>
    </div>
  );
};

export default UserOption;
