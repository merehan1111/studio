import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
// import ExploreMenu from "../../components/They/ExploreMenu";
import FoodDisplay from "../../components/ServiceText/ServiceText";
import AppDownload from "../../components/Services/Services";
function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      {/* <ExploreMenu category={category} setCategory={setCategory} /> */}
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
}

export default Home;
