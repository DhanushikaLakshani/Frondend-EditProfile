import Button from "@mui/material/Button";
import Delete from "@mui/icons-material/Delete";
import Send from "@mui/icons-material/Send";
import React, { useState } from "react";

const DeleteAccount = () => {
  const [old, setOld] = useState("");
  const [newP, setNewP] = useState("");
  const [confrimP, setConfirmP] = useState("");

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
