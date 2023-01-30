import React, { useState } from "react";
import Button from "../../components/buttons";
import "./UserLogin.scss";


type User = {
  email: string
  password: string
}

const UserLogin = () => {

  const [type, setType] = useState<string>("password");

  const togglePasswordVisiblity = () => {
    type === "text" ? setType("password") : setType("text");
  };

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (email === "abdulmaleeekadams@gmail.com" && password === "lendsqr") {
      localStorage.setItems("emailData", "abdulmaleeekadams@gmail.com");
      localStorage.setItems("passwordData", "lendsqr");
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
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="password flexAlignCenter">
                <input
                  type={type}
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
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
                // handleClick={handleSubmit}
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
