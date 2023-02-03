import axios from "axios";
import React, { useState } from "react";
import InputComponent from "./components/InputComponent";

const Password = (props) => {
  const { user } = props;
  console.log(user);
  const [old, setOld] = useState("");
  const [newP, setNewP] = useState("");
  const [confrimP, setConfirmP] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const editPassword = async () => {
    setError("");
    if (newP !== confrimP) {
      setError("passwords not matched");
      return;
    }
    try {
      setIsLoading(true);
      const userD = await axios.patch("http://localhost:4000/user/editPw", {
        newPassword: newP,
        oldPassword: old,
        id: user._id,
        email: user.email,
      });
      setIsLoading(false);
      setIsCorrect(true);
      setOld("");
      setNewP("");
      setConfirmP("");

      console.log(userD.data);
    } catch (error) {
      setIsLoading(false);

      console.log(error);
    }
  };

  return (
    <div style={{ height: "100vh", margin: "2rem", marginTop: "5rem" }}>
      <div className="content">
        <InputComponent className="txtfield" label="Old Password:" value={old} setValue={setOld} />
        <InputComponent className="txtfield" label="New Password:" value={newP} setValue={setNewP} />
        <InputComponent className="txtfield" label="Confirm Password:" value={confrimP} setValue={setConfirmP} />

        <input
          style={{ cursor: "pointer" }}
          onClick={editPassword}
          type="button"
          id="update"
          value={isLoading ? "Updating" : "Update"}
        ></input>

        {error && error}

        {isCorrect && (
          <p
            onClick={() => setIsCorrect(false)}
            style={{ backgroundColor: "green", padding: "1rem" }}
          >
            {" "}
            Password updated successfully{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default Password;
