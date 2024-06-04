// page.js

import React from 'react';
import NewItem from './new-item'; // Assuming new-item.js is in the same directory

const Page = () => {
  return (
    <div>
      <h1>This is the Page component</h1>
      <NewItem />
    </div>
  );
};

export default Page;
