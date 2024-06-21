"use client";


import  { useState } React from 'react';
import dogData from './dogs.json';
import DogList from './dog-list';



export default function DogPage() {
 
    const [doglist, setDoglist] = useState
     dogData.map((dog) => ({...dog}) );
  
    return (
      <div>
        <h1>My Dogs</h1>
        <DogList listofDogs={dogArray} />
      </div>
    );

}