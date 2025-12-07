import React from "react";
const Footer = () => {
  return (
    <React.Fragment>
      <img src="./assets/Footer/Group 48.png" alt="" />

      <div className="flex justify-center items-center gap-50 mx-8">
        <div>
          <img
            src="./assets/Footer/1fe17c3b25104fee0bc6d0a70332d9988e8c939e.png"
            alt=""
            width={100}
            height={60}

          />
          <img src="./assets/Footer/Group 29.png" alt="" />
        </div>
        <div className="grid">
          <h4>Helpful Link</h4>
          <p>Sign in</p>
          <p>Support</p>
          <p>FAQ's</p>
        </div>
        <div className="grid">
          <h4>Company</h4>
          <p>About us</p>
          <p>Privacy</p>
          <p>Terms of use</p>
          <p>Accessibility</p>
        </div>

        <div>
          <h4>Subscribe to our NewsLetter</h4>
          <input type="text" placeholder="Subscribe to our Newsletter" />

          <button className="p-3 px-6 rounded-[24px] bg-[#B2D235]">
            Subscribe
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
