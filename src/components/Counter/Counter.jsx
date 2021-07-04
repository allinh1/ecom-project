
const Counter = ({ onChange , value = 0 }) => {
    return (
        <>
        <div>
            <button onClick={() => onChange(value - 1)}>-</button>
            {value}
            <button onClick={() => onChange(value + 1)}>+</button>
        </div>
        </>
    );
};

export default Counter;


// const Counter = ({ start }) => {
//     const [count, setCount] = useState(start);
//     const [resetCount, setResetCount] = useState(0);

//     const handleIncrement = (event) => {
//         setCount(count + 1);
//     };

//     const handleDecrement = (event) => {
//         setCount(count - 1);
//     };

//     const handleReset = (event) => {
//         setCount(start);
//         setResetCount(resetCount + 1);
//     };

//     return (
//         <>
//             <p>Current Count: {count}</p>
//             <p>Count Resets: {resetCount}</p>
//             <button onClick={handleIncrement}>Increment</button>
//             <button onClick={handleDecrement}>Decrement</button>
//             <button onClick={handleReset}>Reset</button>
//         </>
//     );
// };

// Counter.defaultProps = {
//     start: 0,
// };