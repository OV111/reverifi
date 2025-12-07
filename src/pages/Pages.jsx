import React from "react";

const listings = [
  { name: "New York", count: 2, src: "" },
  { name: "California", count: 43, src: "" },
  { name: "Florida", count: 23, src: "" },
  { name: "Hawaii", count: 53, src: "" },
  { name: "Alaska", count: 5, src: "" },
  { name: "New Jersey", count: 89, src: "" },
  { name: "Georgia", count: 17, src: "" },
];

const ListingsGrid = () => {
  return (
    <div className="py-14 px-6">
      <h1 className="text-center text-3xl md:text-4xl font-semibold mb-10">
        Explore our Listings
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* FIRST BIG CARD */}
        <div className="md:col-span-2 row-span-2 relative">
          <img src={listings[0].src} className="w-full h-full object-cover rounded-xl" />
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-2xl font-bold">{listings[0].name}</h2>
            <p className="text-lime-400">{listings[0].count} Listings</p>
          </div>
        </div>

        {/* OTHER CARDS */}
        {listings.slice(1).map((item) => (
          <div key={item.name} className="relative rounded-xl overflow-hidden">
            <img src={item.src} className="w-full h-40 md:h-48 object-cover" />
            <div className="absolute bottom-3 left-3 text-white">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-lime-400">{item.count} Listings</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingsGrid;
