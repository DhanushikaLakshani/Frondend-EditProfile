import Button from "@mui/material/Button";
import Delete from "@mui/icons-material/Delete";
import Send from "@mui/icons-material/Send";
import React, { useState } from "react";

const DeleteAccount = () => {
  const [old, setOld] = useState("");
  const [newP, setNewP] = useState("");
  const [confrimP, setConfirmP] = useState("");

  return (
    <div style={{ height: "100vh", margin: "2rem", marginTop: "5rem" }}>
      <div style={{ width: "600px", height: "600px", backgroundColor: "white", padding: "3rem" }}>
        <h1> We are sorry to see you go! </h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.{" "}
        </p>
        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginLeft: "2rem" }}
        >
          <Button variant="contained" endIcon={<Send />}>
            Mind Change
          </Button>
          <Button variant="outlined" startIcon={<Delete />}>
            Delete My Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
