const Hero = () => {
  return (
    <div className="flex justify-center items-center my-10 ml-8 gap-0">
      <div className="grid items-center justify-start gap-15">
        <h1 className="text-6xl font-semibold max-w-160 text-[#222222]">Search our listing for your next purchase</h1>
        <div className="flex justify-start items-center gap-0">
          <input
            type="text"
            placeholder="Enter City, neighborhood, ZIP, or Address"
            className="w-100 border-[#222222] shadow-2xl rounded-2xl p-3"
          />
          <img src="./assets/HeroImages/Group 34.png" alt="Search Btn" width={35} height={35} className="cursor-pointer relative right-10"/>
        </div>
      </div>
      <div>
        <img src="./assets/HeroImages/Group 262.png" alt="heroImage" />
      </div>
    </div>
  );
};

export default Hero;
