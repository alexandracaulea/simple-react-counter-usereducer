import { useReducer } from 'react';

function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1,
      };
    case 'decrement':
      return {
        count: state.count - 1,
      };
    case 'reset':
      return {
        count: 0,
      };
    default:
      throw new Error(`This action type isn't supported`);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
  });
  return (
    <div>
      <h2>Counter is: {state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: 'decrement' });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'increment' });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'reset' });
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
