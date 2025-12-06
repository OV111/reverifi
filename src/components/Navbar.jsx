import React from "react";
const Navbar = () => {
  return (
    <React.Fragment>
      <div className="flex justify-center items-center gap-150 bg-[#222222] text-white font-medium">
        <div className="flex justify-center items-center gap-8 my-4">
          <img src="./assets/HeroImages/1fe17c3b25104fee0bc6d0a70332d9988e8c939e.png" alt="" width={100} height={60} className="mr-4"/>
          <button>How we Work</button>
          <button>Find an Agent</button>
          <button>Knowledge Center</button>
        </div>

        <div className="flex justify-center items-center gap-8">
          <button>Sign In</button>
          <button className="p-3 px-6 rounded-[24px] bg-[#B2D235]">Join Now</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
