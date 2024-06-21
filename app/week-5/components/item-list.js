import React, { useState } from 'react';
import Item from './item';
import items from '../items.json';

const ItemList = () => {
  const [shoppingList, setShoppingList] = useState(items);
  const [sortBy, setSortBy] = useState("name");

  const sortedShoppingList = [...shoppingList].sort((a, b) => {
    if (sortBy === 'name' || sortBy === 'category') {
      if (a[sortBy].toLowerCase() < b[sortBy].toLowerCase()) return -1;
      if (a[sortBy].toLowerCase() > b[sortBy].toLowerCase()) return 1;
      return 0;
    } else if (sortBy === 'quantity') {
      return a.quantity - b.quantity;
    }
  });

  return (
    <div>
      <div className="mb-4 flex space-x-2">
        <button
          onClick={() => setSortBy("name")}
          className={`p-2 border rounded ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-white'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`p-2 border rounded ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-white'}`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("quantity")}
          className={`p-2 border rounded ${sortBy === 'quantity' ? 'bg-blue-500 text-white' : 'bg-white'}`}
        >
          Sort by Quantity
        </button>
      </div>
      <ul>
        {sortedShoppingList.map(item => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
