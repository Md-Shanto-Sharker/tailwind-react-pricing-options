import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const price = use(pricingPromise);
  console.log(price);
  return (
    <div>
        <h2>Get Our MemberShip</h2>
      <div className="grid grid-cols-3 gap-10 ">
        {price.map((card) => (
          <PricingCard key={card.id} card={card}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
