import "./index.scss";

type Props = {
  id: number
};

const UserOption = ({id}: Props) =>{

  return (
    <div className={`userOption`}>
      <div>
        <p>Hello</p>
      </div>
      <div>
        <p>Hello</p>
      </div>
      <div>
        <p>View Details</p>
      </div>
    </div>
  );
};

export default UserOption;
