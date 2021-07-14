
const Counter = ({ onChange, value }) => {

    // const decrement = (event) => {
    //     if (quantity !== 0) onDecrement();
    //   };
    
    //   const increment = (event) => {
    //     onIncrement();
    //   };

    return (
        <>
        <div>
        <button onClick={() => onChange(value - 1)}>-</button>
            {value}
        <button  onClick={() => onChange(value + 1)}>+</button>
        </div>
        </>
    );
};

export default Counter