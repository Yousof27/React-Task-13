import React, { useReducer } from 'react'

const intialCountValue = 0;

const reducer = (counterValue, action) => {
    switch (action) {
        case 'increment':
            return counterValue + 1;
        case 'decrement':
            return counterValue - 1;
        case 'reset':
            return intialCountValue;
        default:
            return counterValue;
    }
}

export default function Hook() {

    const [counter1, dispatch1] = useReducer(reducer, intialCountValue);
    const [counter2, dispatch2] = useReducer(reducer, intialCountValue);

    return (
        <>
            <div>1st Counter: {counter1}
                <button onClick={() => dispatch1('decrement')} style={{ marginLeft: '20px' }} >-</button>
                <button onClick={() => dispatch1('reset')}>Reset</button>
                <button onClick={() => dispatch1('increment')}>+</button>
            </div>
            <div>2nd Counter: {counter2}
                <button onClick={() => dispatch2('decrement')} style={{ marginLeft: '10px' }} >-</button>
                <button onClick={() => dispatch2('reset')}>Reset</button>
                <button onClick={() => dispatch2('increment')}>+</button>
            </div>
        </>
    )
}
