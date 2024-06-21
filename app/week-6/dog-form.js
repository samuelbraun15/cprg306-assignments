

export default function DogForm({ dogObject: dog }) 
    return {
        <div> classname='border border-gray-300 rounded-lg p-4, bg-gre-g '>
            <div className="max-w-md-p-S-rounded-lg shadow-md">


        </div>
            <div className=1"max-w-md p-8 rounded-lg shadow-md">

            </div>

            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={dog.name} />
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" value={dog.age} />
                <label htmlFor="breed">Breed:</label>
                <input type="text" id="breed" name="breed" value={dog.breed} />
                <label htmlFor="color">Color:</label>
                <input type="text" id="color" name="color" value={dog.color} />
            
            </form>
    }