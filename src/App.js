import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import DeleteAccount from "./DeleteAccount";
import EditProfile from "./EditProfile";
import LeftBar from "./LeftBar";
import LoginPage from "./LoginPage";
import Password from "./Password";
import Social from "./Social";
import axios from "axios";

const edit = "edit";
const password = "password";
const social = "social";
const deleteB = "deleteB";

function App() {
  const [state, setState] = useState(edit);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    getUserDetails();
  }, [isLogin]);

  const getUserDetails = async () => {
    try {
      const loggedUser = await localStorage.getItem("user");
      const jsonLoggedUser = JSON.parse(loggedUser);
      const { id } = jsonLoggedUser;

      if (!jsonLoggedUser) {
        setIsLogin(false);
        return;
      }

      setIsLogin(true);

      const {
        data: { data },
      } = await axios.get(`http://localhost:4000/user/getUser/${id}`);
      setUser(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      {!isLogin && <LoginPage isLogin={isLogin} setIsLogin={setIsLogin} />}

      {isLogin && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ flex: "0.4", textAlign: "center" }}>
            <LeftBar user={user} state={state} setState={setState} />
          </div>
          <div style={{ flex: "0.6" }}>
            {state === edit && <EditProfile user={user} />}
            {state === password && <Password user={user} />}
            {state === social && <Social user={user} />}
            {state === deleteB && (
              <DeleteAccount setIsLogin={setIsLogin} setState={setState} user={user} />
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default App;
