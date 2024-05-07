import React, { useState } from "react";

const Accordian = () => {
  return (
    <div className="join join-vertical w-full">
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" defaultChecked />
        <div className="collapse-title text-md font-medium">
          Ingredients
        </div>
        <div className="collapse-content">
          <p>This food topped with tomato sauce, fresh mozzarella cheese, and basil leaves.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-md font-medium">
          Ingredients
        </div>
        <div className="collapse-content">
          <p>This food topped with tomato sauce, fresh mozzarella cheese, and basil leaves.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-md font-medium">
          Ingredients
        </div>
        <div className="collapse-content">
          <p>this food topped with tomato sauce, fresh mozzarella cheese, and basil leaves.</p>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
