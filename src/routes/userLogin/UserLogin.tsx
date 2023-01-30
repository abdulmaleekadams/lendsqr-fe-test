import React, { useState } from "react";
import Button from "../../components/buttons";
import "./UserLogin.scss";

type User = {
  email: string;
  password: string;
};

const UserLogin = () => {
  const [type, setType] = useState<string>("password");

  const togglePasswordVisiblity = () => {
    type === "text" ? setType("password") : setType("text");
  };

  const [user, setUser] = useState<User>({ email: "", password: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Clicked')
    // validate user credentials

    if (
      user.email === "abdulmaleeekadams@gmail.com" &&
      user.password === "lendsqr"
    ) {
      localStorage.setItem("user", JSON.stringify(user));
      //Redirect to User dashboard
      window.location.href = "/dashboard";
    }
  };

  return (
    <>
      <header className="brand">
        <a href="/" aria-label="Lendsqr home page">
          <img src="/lendsqrlogo.png" alt="Brand logo" />
        </a>
      </header>

      <main className="userLogin flexCenter">
        <div className="image">
          <img src="home.png" alt="pablo" />
        </div>

        <div className="user flexColBetween">
          <div className="greeting flexCol">
            <h1>Welcome!</h1>
            <span>Enter details to login</span>
          </div>

          <div className="userDetailsForm">
            <form onSubmit={handleSubmit} className="flexCol">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleInputChange}
              />
              <div className="password flexAlignCenter">
                <input
                  type={type}
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="passwordVisiblity"
                  onClick={togglePasswordVisiblity}
                >
                  SHOW
                </button>
              </div>
              <a href="#reset-password" className="forgetPassword">
                FORGOT PASSWORD?
              </a>
              <Button
                btnType="submit"
                label="LOG IN"
                variant="primary"
                customClass="userButton"
              />
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default UserLogin;
