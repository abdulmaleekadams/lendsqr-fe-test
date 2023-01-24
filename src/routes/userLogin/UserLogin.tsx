import React, { useState } from "react";
import Button from "../../components/buttons";
import "./UserLogin.scss";

const UserLogin = () => {
  const handleLogin = () => {
    alert("I got clicked");
  };

  const [type, setType] = useState<string>("password");

  const togglePasswordVisiblity = () => {
    type === "text" ? setType("password") : setType("text");
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

          <div className="userDetails">
            <form action="/dashboard" method="post" className="flexCol">
              <input type="email" name="email" placeholder="Email" />
              <div className="password flexAlignCenter">
                <input type={type} name="password" placeholder="Password" />
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
                handleClick={handleLogin}
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
