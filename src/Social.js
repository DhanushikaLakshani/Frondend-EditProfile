import axios from "axios";
import React, { useState, useEffect } from "react";
import InputComponent from "./components/InputComponent";

const Social = (props) => {
  const { user } = props;

  const [linked, setLined] = useState("");
  const [twitter, setTwitter] = useState("");
  const [insta, setInsta] = useState("");
  const [facebook, setFacebook] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!user) return;
    setLined(user.linkedin ?? "");
    setFacebook(user.facebook ?? "");
    setTwitter(user.twitter ?? "");
    setInsta(user.instagram ?? "");
  }, [user]);

  const updateSocial = async () => {
    console.log("clicked");
    try {
      setIsLoading(true);
      const social = await axios.patch(`http://localhost:4000/user/update/${user._id}`, {
        linkedin: linked,
        facebook,
        twitter,
        instagram: insta,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("///", error);
    }
  };

  return (
    <div style={{ height: "100vh", margin: "2rem", marginTop: "5rem" }}>
      <div className="content">
        <InputComponent className="txtfield" label="LinkedIn:" value={linked} setValue={setLined} />
        <InputComponent className="txtfield" label="Twitter:" value={twitter} setValue={setTwitter} />
        <InputComponent className="txtfield" label="Instagram:" value={insta} setValue={setInsta} />
        <InputComponent className="txtfield" label="Facebook:" value={facebook} setValue={setFacebook} />

        <input
          style={{ cursor: "pointer" }}
          onClick={updateSocial}
          type="button"
          id="update"
          value={!isLoading ? "Update" : "Updating"}
        ></input>
      </div>
    </div>
  );
};

export default Social;
