import React from "react";
import Herosection1 from "./Herosection1";
import CardSection from "./Mian-card";
import Section1 from "./Section2";
import SkinScience from "./Articlecard";
import SkinConcern from "./SkinSection";
import Navbar from "./navBar";

function App() {
  return (
    <>
      <Navbar />
      <Herosection1 />
      <CardSection />
      <Section1 />
      <SkinConcern />
      <SkinScience />
    </>
  );
}

export default App;
