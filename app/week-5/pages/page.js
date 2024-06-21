import React from 'react';
import ItemList from '../components/item-list';

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
