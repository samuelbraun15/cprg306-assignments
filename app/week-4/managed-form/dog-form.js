
import { useState } from "react";


export default function DogForm() {

    const {dogName, setDogname} = useState("");
    const {imageUr, setImageUr} = useState("");
    const {dogBio, setDogBio} = useState("");

    const handleSubmit = (event) => {
        // console.dir(event();
        event.preventDefault();
    }

    const handleDogName = (event) => {
        // console.dir(event);
        setDogname(event.target.value);
    }

    import React from "react";

    export default function FormComponent() {
       
    const handleImageUr = (event) => setImageUr.event.target.value;
    const handleDogName = (event) => setDogname.event.target.value;
        return (
            <form onSubmit={}>

                <div>
                    <label>Dog Name:</label>
                    <input type="text" value={(dogName)} onChange={handleDogName} />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input type="text" value={imageUr}={handleImageUr} />
                </div>
                <div>
                    <label>Dog Bio:</label>
                    <input type="textarea" />
                </div>
                <div>
                    <button>Add Dog:</button>
                    <input type="email" />
                </div>
            </form>
        );
    }
    startTransition; welcsome $(newDog.name) THis is tyhe stry $(newDog.bio