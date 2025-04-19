import React from 'react';
import { useNavigate } from 'react-router-dom';

export const VenderMenu = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate("/vendors", { state: { selectedCategory: category } });
    scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-6">Build your vendor team</h1>
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {["Caterers", "Florist", "Officiants", "Venue", "Decorators", "Photographer", "DJs", "View all"].map((category) => (
          <button
            key={category}
            onClick={() => handleClick(category === "View all" ? "" : category)}
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:translate-y-[-10px] transition-all duration-500 hover:!bg-orange-200 transition"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
