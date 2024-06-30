import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-2 border-b border-gray-200">
      <div className="font-bold">{name}</div>
      <div>Quantity: {quantity}</div>
      <div>Category: {category}</div>
    </li>
  );
};

export default Item;
