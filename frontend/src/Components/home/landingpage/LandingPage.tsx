import React from "react";

const LandingPage = () => {
  return (
    <div className=" h-96 flex text-foreground">
      <div className="left w-1/2">
        <div className="wrapper mt-24 ml-24">
          <h1 className="text-6xl w-8/12 mb-4">
            The watch made for the 21st century
          </h1>
          <p className="text-secondary w-8/12 text-sm mb-4">
            WORK, SLEEP, TRAIN, REPEAT. SMARTY GOT YOU COVERED FOR ALL YOUR
            DAILY NEEDS.
          </p>
          <div className="buttons flex  flex justify-around w-9/12 -ml-8 ">
            <button className="bg-button p-4 rounded-md flex items-center justify-center">
              Smarty assistant
              <span className="material-symbols-outlined pl-2">
                precision_manufacturing
              </span>
            </button>
            <button className="bg-transparent border p-4 rounded-sm flex items-center justify-center">
              <span className="material-symbols-outlined pr-2">
                play_circle
              </span>
              Watch demo
            </button>
          </div>
        </div>
      </div>
      <div className="right w-1/2 flex items-center justify-center ">
        <video
          src="/smart_watch_stocks_demonstration.mp4"
          autoPlay
          muted
          className="mx-auto mt-32 pr-24 pl-2"
        ></video>
      </div>
    </div>
  );
};

export default LandingPage;
