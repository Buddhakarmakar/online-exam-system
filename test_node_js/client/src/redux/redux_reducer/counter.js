import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    decrement,
    increment,
    selectCount

} from './CounterSlice';


export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();


    return (
        <div>
            <div >
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <span >{count}</span>
                <button

                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
            </div>
        </div>
    );
}
