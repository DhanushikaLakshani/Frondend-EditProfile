import React, { useState } from "react";
import "./App.css";
import DeleteAccount from "./DeleteAccount";
import EditProfile from "./EditProfile";
import LeftBar from "./LeftBar";
import Password from "./Password";
import Social from "./Social";

const edit = "edit";
const password = "password";
const social = "social";
const books = "books";
const deleteB = "deleteB";

function App() {
  const [state, setState] = useState(edit);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ flex: "0.4", textAlign: "center" }}>
        <LeftBar state={state} setState={setState} />
      </div>
      <div style={{ flex: "0.6" }}>
        {state === edit && <EditProfile />}
        {state === password && <Password />}
        {state === social && <Social />}
        {state === deleteB && <DeleteAccount />}
      </div>
    </div>
  );
}

export default App;
