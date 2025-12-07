import React from "react";
import CardFeature from "../components/FeatureCard";

const cards = [
  {
    badge: "New",
    mainImage:
      "./assets/FeaturesImages/2df0ebb0bfa69e00b092af4d79659410c4f79d03.png",
    secondaryImage:
      "./assets/FeaturesImages/e00c6852c8a3b58d060645c253f13d10c58efc76.png",
    icon: "./assets/FeaturesImages/Group 12.png",
    title: "Apartment #1",
    location: "Bronx, NY 10459",
    price: "$30,000",
    button: "./assets/FeaturesImages/Group 3.png",
    button2: "./assets/FeaturesImages/icons8-share.png",
  },
  {
    badge: "Rent",
    mainImage:
      "./assets/FeaturesImages/2b4213bec169816eadb3d76dac155fbf27361f2c.png",
    secondaryImage:
      "./assets/FeaturesImages/e00c6852c8a3b58d060645c253f13d10c58efc76.png",
    icon: "./assets/FeaturesImages/Group 12.png",
    title: "Apartment #1",
    location: "Bronx, NY 10459",
    price: "$123/Month",
    button: "./assets/FeaturesImages/Group 3.png",
    button2: "./assets/FeaturesImages/icons8-share.png",
  },
  {
    badge: "New",
    mainImage:
      "./assets/FeaturesImages/2df0ebb0bfa69e00b092af4d79659410c4f79d03.png",
    secondaryImage:
      "./assets/FeaturesImages/e00c6852c8a3b58d060645c253f13d10c58efc76.png",
    icon: "./assets/FeaturesImages/Group 12.png",
    title: "Apartment #1",
    location: "Bronx, NY 10459",
    price: "$30,000",
    button: "./assets/FeaturesImages/Group 3.png",
    button2: "./assets/FeaturesImages/icons8-share.png",
  },
];

const FeaturedListing = () => {
  return (
    <React.Fragment>
      <div className="py-8">
        <h1 className="text-center text-4xl  pb-6 text-[#222222] font-semibold">
          Our Featured Listing
        </h1>

        <div className="flex justify-center items-center ">
          {cards.map((card, i) => (
            <CardFeature key={i} data={card} />
          ))}
        </div>
        <div className="my-8 flex justify-center items-center">
          <img src="./assets/FeaturesImages/Group 35.png" alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default FeaturedListing;
