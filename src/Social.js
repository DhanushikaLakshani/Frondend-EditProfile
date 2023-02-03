import React, { useState } from "react";
import InputComponent from "./components/InputComponent";

const Social = () => {
  const [linked, setLined] = useState("");
  const [twitter, setTwitter] = useState("");
  const [insta, setInsta] = useState("");
  const [facebook, setFacebook] = useState("");

  return (
    <div style={{ height: "100vh", margin: "2rem", marginTop: "5rem" }}>
      <div className="content">
        <InputComponent className="txtfield" label="LinkedIn:" value={linked} setValue={setLined} />
        <InputComponent className="txtfield" label="Twitter:" value={twitter} setValue={setTwitter} />
        <InputComponent className="txtfield" label="Instagram:" value={insta} setValue={setInsta} />
        <InputComponent className="txtfield" label="Facebook:" value={facebook} setValue={setFacebook} />

        <input clasName='updtbtn' type="button" id="update" value="Update"></input>
      </div>
    </div>
  );
};

export default Social;
