import React from "react";
import "./App.css";
import "./bootstrap.min.css";
import NavBar from "./components/NavBar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

function App() {
  return (
    <>
      <div className="App">
        <NavBar></NavBar>
      </div>
    </>
  );
}

export default App;
