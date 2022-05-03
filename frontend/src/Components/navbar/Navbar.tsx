import React from "react";
import { Link } from "react-router-dom";
import Platform from "platform";

const Navbar = () => {
  const os = Platform.os.family;

  const PlatformComponent = (os: any) => {
    const isMac = os === "OSX";

    if (isMac) {
      return (
        <button className="bg-button p-2 rounded-md flex items-center justify-center">
          Smarty assistant
          <span className="material-symbols-outlined pl-2">
            desktop_windows
          </span>
        </button>
      );
    } else {
      return (
        <button className="bg-button p-2 rounded-md flex items-center justify-center">
          Smarty assistant
          <span className="material-symbols-outlined pl-2">
            precision_manufacturing
          </span>
        </button>
      );
    }
  };

  return (
    <nav className="flex items-center justify-between w-full h-20  shadow-lg text-base  text-foreground z-50  bg-nav">
      <div className="logo z-50 ml-64">
        <Link to="/">
          <h1 className="font-bold text-2xl  ml-3 z-50">Smarty</h1>
        </Link>
      </div>
      <div className="flex justify-around navlinks  w-5/12 h-full z-50 items-center mr-12 ">
        <Link to="/Community">Community</Link>
        <Link to="/Blog">Blog</Link>
        <Link to="/Pricing">Pricing</Link>
        <Link to="/Company">Company</Link>
        <PlatformComponent />
      </div>
    </nav>
  );
};

export default Navbar;
