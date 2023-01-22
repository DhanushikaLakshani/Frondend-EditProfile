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
        <InputComponent label="LinkedIn:" value={linked} setValue={setLined} />
        <InputComponent label="Twitter:" value={twitter} setValue={setTwitter} />
        <InputComponent label="Instagram:" value={insta} setValue={setInsta} />
        <InputComponent label="Facebook:" value={facebook} setValue={setFacebook} />

        <input type="button" id="update" value="Update"></input>
      </div>
    </div>
  );
};

export default Social;
