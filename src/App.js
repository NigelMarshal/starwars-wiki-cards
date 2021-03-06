import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Planets from "./Components/Planets";
import People from "./Components/People";

function App() {
  let [page, setPage] = useState("planets");

  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === "planets" ? <Planets /> : <People />}
      </div>
    </div>
  );
}

export default App;
