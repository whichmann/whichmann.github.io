import React from "react";
import logo from "../media/banner.png";

const Home = () => {
  return (
    <span className={"rozmaturzeni-home"}>
      <img src={logo} className={"rozmaturzeni-logo"} alt="logo"></img>
      <br />
      <br />
      <h1>ROZMATURZENI</h1>
      <h3>ADAM PONIATOWSKI</h3>
      <br />
      <h2>Osiągnijmy cel razem!</h2>
    </span>
  );
};

export default Home;
