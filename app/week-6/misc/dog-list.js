"use client";

import { useState } from 'react';
import dogData from './dogs.json';

export default function DogList({ listofDogs}) {


    const [doglist, setDoglist] = useState
    let dogArray = dogData.map((dog) => ({...dog}) );


  return (
    <ul>
      {dogData.map((dog) => (
        <li key={dog.id}>{dog.name}</li>
      ))}
    </ul>
  );
}