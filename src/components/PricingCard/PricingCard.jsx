import React from "react";

const PricingCard = ({ card }) => {
  const { title, price ,features} = card;
  return (
    <div>
      <div className="card  bg-base-100 shadow-sm bg-blue-300">
        <div className="card-body">
          <span className="badge badge-xs badge-warning">Most Popular</span>
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">{title}</h2>
            <span className="text-xl">{price}</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {
              features.map(feature =>  <li feature={feature} className="opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-base-content/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="line-through">
                {features}
              </span>
            </li>)
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
