import React, { useDeferredValue } from 'react'

const ExpensiveComponent = (props: any) => {

    const computeExpensiveValue = (input: number) => {
        console.log("Expensive computation in progress...");
        // Simulate a slow computation
        for (let i = 0; i < 1000000000; i++) { }
        return `Computed value: ${input}`;
    };
    const deferredValue = useDeferredValue(props.input);
    console.log("Expensive computation done.");
    return (
        <div>
            <p>Original Value: {props.input}</p>
            <p>Deferred Value: {deferredValue}</p>
        </div>
    )
}

export default ExpensiveComponent