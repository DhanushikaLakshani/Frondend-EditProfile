import Avatar from "@mui/material/Avatar";
import React from "react";
import man from "./man.jpg";

const edit = "edit";
const password = "password";
const social = "social";
const books = "books";
const deleteB = "deleteB";

const LeftBar = (props) => {
  const { setState, user } = props;
  return (
    <div style={{ width: "100%", marginTop: "4rem" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Avatar src={man} style={{ alignContent: "center" }} sx={{ width: 100, height: 100 }} />
      </div>
      <h4> {user.name} </h4>
      {/* <h4>Books : 1000</h4>
      <h4>Followers : 1</h4>
      <h4>Following : 2</h4> */}

      <div style={{ height: "3rem" }}></div>

      <div style={{ color: "white" }}>
        <h3 onClick={() => setState(edit)} style={{ cursor: "pointer" }}>
          Edit Profile
        </h3>
        <h3 onClick={() => setState(password)} style={{ cursor: "pointer" }}>
          Password
        </h3>
        <h3 onClick={() => setState(social)} style={{ cursor: "pointer" }}>
          Social Profiles
        </h3>
        <h3 onClick={() => setState(books)} style={{ cursor: "pointer" }}>
          My Books
        </h3>
        <hr style={{ marginLeft: "30%", marginRight: "30%", cursor: "pointer" }} />
        <h2 onClick={() => setState(deleteB)} style={{ color: "red", cursor: "pointer" }}>
          Delete Account
        </h2>
      </div>
    </div>
  );
};

export default LeftBar;
