



// export default function Counter(curCount, IncFunc) {
//     return (
//         <div>
//             <h1>Counter</h1>
//             <p>Count; {curCount}</p>
//             <button onClick={({} Increment)} </button>
//         </div>
//     )


    
    export default function Counter({ curCount, IncFunc }) {
        return (
            <div>
                <h1>Counter</h1>
                <p>Count: {curCount}</p>
                <button onClick={IncFunc}>Increment</button>
            </div>
        );
    }
    



