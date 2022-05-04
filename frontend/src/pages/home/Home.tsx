import React from "react";

// Importing some pages
import LandingPage from "../../Components/home/landingpage/LandingPage";
import Prices from "../../Components/home/prices/Prices";

const Home = () => {
  return (
    <div>
      <section>
        <LandingPage />
      </section>
      <section>
        <Prices />
      </section>
    </div>
  );
};

export default Home;
