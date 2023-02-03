import React, { useState } from "react";
import InputComponent from "./components/InputComponent";

const Password = () => {
  const [old, setOld] = useState("");
  const [newP, setNewP] = useState("");
  const [confrimP, setConfirmP] = useState("");

  return (
    <div style={{ height: "100vh", margin: "2rem", marginTop: "5rem" }}>
      <div className="content">
        <InputComponent className="txtfield" label="Old Password:" value={old} setValue={setOld} />
        <InputComponent className="txtfield" label="New Password:" value={newP} setValue={setNewP} />
        <InputComponent className="txtfield" label="Confirm Password:" value={confrimP} setValue={setConfirmP} />

        <input clasName='updtbtn' type="button" id="update" value="Update"></input>
      </div>
    </div>
  );
};

export default Password;
