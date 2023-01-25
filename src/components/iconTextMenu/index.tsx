import React from "react";
import { Dashboard } from "../../assets/icons";
import "./index.scss";

type Props = {
  icon?: any;
  text?: string;
  active?: boolean;
};

const IconTextMenu = ({
  icon = <Dashboard />,
  text = "<Text>",
  active = false,
}: Props) => {
  return (
    <div className={`flexStartCenter iconTextMenu ${active ? "active" : ""}`}>
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default IconTextMenu;
