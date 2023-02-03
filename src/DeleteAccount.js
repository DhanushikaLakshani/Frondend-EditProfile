import Button from "@mui/material/Button";
import Delete from "@mui/icons-material/Delete";
import Send from "@mui/icons-material/Send";
import React, { useState } from "react";
import axios from "axios";

const DeleteAccount = (props) => {
  const { user, setState, setIsLogin } = props;

  const deleteUser = async () => {
    try {
      await axios.delete(`http://localhost:4000/user/delete/${user._id}`);
      await localStorage.removeItem("user");
      setIsLogin(false);
    } catch (error) {
      console.log(error);
    }
  };

  const mindChange = () => {
    setState("edit");
  };

  return (
    <div style={{ height: "100px", margin: "3px", marginTop: "5rem" }}>
      <div style={{ width: "350px", height: "500px", backgroundColor:"white", padding: "3rem" }}>
        <h1> We are sorry to see you go! </h1>
        <p>
          {" "}
          If you'd like to reduce your email notifications, you can disable them
          here or if you just want to change your username,you can do that here.
          Be advised,account deletion is final.There will be no way to restore your account.

          .{" "}
        </p>
        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "3rem", marginLeft: "1rem" }}
        >
          <Button onClick={mindChange} variant="contained" endIcon={<Send />}>
            Mind Change
          </Button>
          <Button onClick={deleteUser} variant="outlined" startIcon={<Delete />}>
            Delete My Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
