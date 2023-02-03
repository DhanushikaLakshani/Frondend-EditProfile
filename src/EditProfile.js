import React, { useState } from "react";
import man from "./man.jpg";
import { BsFillCameraFill } from "react-icons/bs";
import InputComponent from "./components/InputComponent";
import Avatar from "@mui/material/Avatar";

const EditProfile = () => {
  const [name, setname] = useState("");
  const [nic, setnic] = useState("");
  const [email, setemail] = useState("");
  const [location, setlocation] = useState("");
  const [bio, setbio] = useState("");
  const [website, setwebsite] = useState("");
  const [portfolio, setportfolio] = useState("");

  return (
    <div style={{ height: "100vh", margin: "2rem" }}>
      <div
        className="frame1"
        style={{ display: "flex", gap: "2rem", marginBottom: "3rem", alignItems: "flex-end" }}
      >
        <Avatar src={man} />
        {/* <img src={man} className="pic2" alt="img" /> */}
        <button className="cam" href="">
          <BsFillCameraFill />
        </button>
        <div></div>
      </div>

      <div className="content">
        <InputComponent className="txtfield" label="Name:" value={name} setValue={setname} />
        <InputComponent className="txtfield" label="NIC:" value={nic} setValue={setnic} />
        <InputComponent className="txtfield" label="Email:" value={email} setValue={setemail} />
        <InputComponent className="txtfield" label="Location:" value={location} setValue={setlocation} />
        <InputComponent className="txtfield" label="Bio:" value={bio} setValue={setbio} />
        <InputComponent className="txtfield" label="Personal Website:" value={website} setValue={setwebsite} />
        <InputComponent className="txtfield" label="Portfolio Url:" value={portfolio} setValue={setportfolio} />
      
      
      
        <input clasName='updtbtn' type="button" id="update" value="Update"></input>
      </div>
    </div>
    
  );
};

export default EditProfile;
