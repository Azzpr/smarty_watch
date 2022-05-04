import React from "react";

const Prices = () => {
  return (
    <div className="h-96 justify-around items-center text-foreground flex border mt-12">
      <div className="1">
        <h1>Reliable</h1>
        <p>Trust that your watch allways will be working when you need it.</p>
      </div>
      <div className="2">
        <h1>Private & Secure</h1>
        <p>
          All cloud features are opt-in. Data is encrypted at rest.{" "}
          <span className="underline">Learn more</span>
        </p>
      </div>
      <div className="3">
        <h1>Backwards compatible</h1>
        <p>
          New updated software will allways work with older generations of the
          watch.
        </p>
      </div>
    </div>
  );
};

export default Prices;
