import * as React from "react";
import NavBar from "./NavBar";
import Herosection1 from "./Herosection1";
import CardSection from "./Mian-card";
import Section1 from "./Section2";
import SkinScience from "./Articlecard";
import SkinConcern from "./SkinSection";

function App() {
  return (
    <>
      <NavBar />
      <Herosection1 />
      <CardSection />
      <Section1 />
      <SkinConcern />
      <SkinScience />
    </>
  );
}

export default App;
