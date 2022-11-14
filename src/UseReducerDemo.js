import React, { useReducer } from "react";

const inititalState = { count: 0}

function reducer(state, action) {
    console.log("hiiii");
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            return state.count
    }
}

function UseReducerDemo() {

    const [state, dispatch] = useReducer(reducer, inititalState)

    return (
        <div>
            <center>
                <h1>Use Reducer demo!!!</h1>
                <p>Count: {state.count}</p>
                <button id="btn" type="button" onClick={() => dispatch({ type: 'increment' })}>Increment</button>
                <button id="btn" type="button" onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            </center>
        </div>
    )
}

export default UseReducerDemo