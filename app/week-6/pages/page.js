// "use client";

// import { useState } from 'react';
// import ItemList from './item-list';
// import NewItem from './new-item';
// import itemsData from './items.json';

// export default function Page() {
//   // State initialization
//   const [items, setItems] = useState(itemsData);

//   // Event handler for adding new items
//   const handleAddItem = (newItem) => {
//     setItems((prevItems) => [...prevItems, newItem]);
//   };

//   // Render the component
//   return (
//     <main>
//       <h1>Shopping List</h1>
//       <NewItem onAddItem={handleAddItem} />
//       <ItemList items={items} />
//     </main>
//   );
// }