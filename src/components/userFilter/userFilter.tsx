import React, { useState } from "react";
import "./userFilter.scss";
import Button from "../buttons";

type User = {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  date_joined: string;
  status: string;
  createdAt: string;
};

type Props = {
  users: User[];
  setFilteredUsers?: any;
};

const UserFilter = ({ users, setFilteredUsers }: Props) => {
  const [filter, setFilter] = useState({
    organization: "",
    username: "",
    email: "",
    date: "",
    phone: "",
    status: "",
  });

  const handleChange = (event: React.ChangeEvent<any>) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.value,
    });
  };

  const handleFilter = () => {
    let filteredUsers = users.filter((user) => {
      return (
        (!filter.organization || user.orgName === filter.organization) &&
        (!filter.username || user.userName === filter.username) &&
        (!filter.email || user.email === filter.email) &&
        (!filter.date || user.date_joined === filter.date) &&
        (!filter.phone || user.phoneNumber === filter.phone) &&
        (!filter.status || user.status === filter.status)
      );
    });
    setFilteredUsers(filteredUsers);
  };

  const handleReset = () => {
    setFilter({
      organization: "",
      username: "",
      email: "",
      date: "",
      phone: "",
      status: "",
    });
    setFilteredUsers(users);
  };

  return (
    <div className="userFilter">
      <div className="filterOptions">
        <label>
          Organization
          <select
            value={filter.organization}
            onChange={handleChange}
            name="organization"
          >
            <option>SELECT</option>
            {users.map((user, idx) => (
              <option value={user.orgName} key={idx}>
                {user.orgName}
              </option>
            ))}
          </select>
        </label>

        <label>
          Username
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={filter.username}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={filter.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Date
          <input
            type="date"
            placeholder="Date"
            name="date"
            value={filter.date}
            onChange={handleChange}
          />
        </label>

        <label>
          Phone Number
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={filter.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Status
          <select>
            <option>SELECT</option>
            <option value={"Active"}>Active</option>
            <option value={"Inactive"}>Inactive</option>
            <option value={"Pending"}>Pending</option>
            <option value={"Blacklisted"}>Blacklisted</option>
          </select>
        </label>
      </div>
      <div className="filterButtons">
        <Button label="Filter" variant="secondary" handleClick={handleFilter} />
        <Button label="Reset" variant="primary" handleClick={handleReset} />
      </div>
    </div>
  );
};

export default UserFilter;
