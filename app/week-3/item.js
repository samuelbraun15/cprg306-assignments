import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md mb-2">
      <div>
        <p className="font-bold text-lg">{name}</p>
        <p className="text-sm text-gray-600">{category}</p>
      </div>
      <span className="text-lg font-semibold">{quantity}</span>
    </li>
  );
};

export default Item;
