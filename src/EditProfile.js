import React, { useState, useEffect } from "react";
import man from "./man.jpg";
import { BsFillCameraFill } from "react-icons/bs";
import InputComponent from "./components/InputComponent";
import Avatar from "@mui/material/Avatar";
import axios from "axios";

const EditProfile = (props) => {
  const { user } = props;

  const [name, setname] = useState("");
  const [nic, setnic] = useState("");
  const [email, setemail] = useState("");
  const [location, setlocation] = useState("");
  const [bio, setbio] = useState("");
  const [website, setwebsite] = useState("");
  const [portfolio, setportfolio] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!user) return;
    setname(user.name ?? "");
    setnic(user.nic ?? "");
    setemail(user.email ?? "");
    setlocation(user.location ?? "");
    setbio(user.bio ?? "");
    setwebsite(user.webUrl ?? "");
    setportfolio(user.portfolioUrl ?? "");
  }, [user]);

  const updateUser = async () => {
    console.log("clicked");
    try {
      setIsLoading(true);
      const userd = await axios.patch(`http://localhost:4000/user/update/${user._id}`, {
        email,
        name,
        nic,
        location,
        bio,
        portfolioUrl: portfolio,
        webUrl: website,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("///", error);
    }
  };

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
        <InputComponent label="Name:" value={name} setValue={setname} />
        <InputComponent label="NIC:" value={nic} setValue={setnic} />
        <InputComponent label="Email:" value={email} setValue={setemail} />
        <InputComponent label="Location:" value={location} setValue={setlocation} />
        <InputComponent label="Bio:" value={bio} setValue={setbio} />
        <InputComponent label="Personal Website:" value={website} setValue={setwebsite} />
        <InputComponent label="Portfolio Url:" value={portfolio} setValue={setportfolio} />

        <div
          onClick={updateUser}
          style={{
            padding: "1rem",
            textAlign: "center",
            border: "1px solid black",
            cursor: "pointer",
            marginTop: "1rem",
          }}
          type="button"
          id="update"
        >
          {!isLoading ? "Update" : "Updating"}
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
