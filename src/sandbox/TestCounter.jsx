import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counter';

const TestCounter = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.counter.count)
    return (
        <div>
            <h3>{data}</h3>
            <button onClick={() => dispatch(increment())} className="p-4 bg-blue-50">Increment</button>
            <button onClick={() => dispatch(decrement())} className="p-4 bg-blue-500">Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(5))} className="p-4 bg-blue-50 text-green-200">Amount</button>
        </div>
    )
}

export default TestCounter
