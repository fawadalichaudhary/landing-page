import React from "react";
import Navbar from "./NavBar";
import Herosection1 from "./Herosection1";
import CardSection from "./CardSection";
import Section1 from "./Section1";
import SkinScience from "./SkinSciencs";
import SkinConcern from "./SkinConcern";
import Reviews from "./Reveiw";

function App() {
  return (
    <>
      <Navbar />
      <Herosection1 />
      <CardSection />
      <Section1 />
      <SkinConcern />
      <SkinScience />
      <Reviews />
    </>
  );
}

export default App;
