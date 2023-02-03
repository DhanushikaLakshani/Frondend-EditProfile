import Button from "@mui/material/Button";
import React, { useState } from "react";
import axios from "axios";

const statusLogin = {
  login: "Login",
  register: "Register",
};

const LoginPage = (props) => {
  const { setIsLogin } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(statusLogin.login);

  const login = async () => {
    try {
      setIsLoading(true);

      const {
        data: { data },
      } = await axios.post("http://localhost:4000/user/login", { email, password });
      setIsLoading(false);
      setIsLogin(true);
      localStorage.setItem("user", JSON.stringify({ email: data["email"], id: data["_id"] }));
    } catch (error) {
      setIsLoading(false);
    }
  };

  const register = async () => {
    try {
      setIsLoading(true);
      const loginData = await axios.post("http://localhost:4000/user/register", {
        email,
        password,
        name: userName,
      });
      console.log(loginData);
      setStatus(statusLogin.login);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const loginStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    borderRadius: "10px",
    height: "100vh",
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  };

  const inputStyles = {
    margin: "10px",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid gray",
    width: "100%",
  };

  return (
    <div style={loginStyles}>
      <form
        style={{
          width: "80%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <h1>V4U {status} </h1>
        <label>Email:</label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyles}
        />
        <label>Password:</label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyles}
        />
        {status === statusLogin.register && (
          <div>
            {" "}
            <label> User Name </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={inputStyles}
            />{" "}
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
          {status === statusLogin.login ? (
            <Button onClick={login} variant="contained">
              {isLoading ? "LOADING" : "LOG IN"}
            </Button>
          ) : (
            <Button onClick={register} variant="outlined">
              {isLoading ? "LOADING" : "REGISTER"}
            </Button>
          )}
        </div>
        <h4
          onClick={() =>
            status === statusLogin.login
              ? setStatus(statusLogin.register)
              : setStatus(statusLogin.login)
          }
          style={{ cursor: "pointer" }}
        >
          {" "}
          Switch To {status === statusLogin.login ? "Register" : "Login"}{" "}
        </h4>
      </form>
    </div>
  );
};

export default LoginPage;
