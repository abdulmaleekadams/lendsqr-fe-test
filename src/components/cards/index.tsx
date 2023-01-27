import React from "react";
import "./index.scss";
type Props = {
  icon: any;
  title: string;
  total: string;
};

const Card = ({ title, total, icon }: Props) => {
  return (
    <div className="card flexCol">
      {icon}
      <p className="title">{title}</p>
      <p className="total">{total}</p>
    </div>
  );
};

export default Card;
