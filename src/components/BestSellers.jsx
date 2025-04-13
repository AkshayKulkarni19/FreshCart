import React from "react";
import { assets } from "../assets/assets";

const BestSellers = () => {
  return (
    <div className="mt-6">
      <p className="text-2xl md:text-3xl font-medium">Best Seller</p>
      <div>
        <img src={assets.add_icon} />
      </div>
    </div>
  );
};

export default BestSellers;
