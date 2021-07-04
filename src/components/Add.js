import { useState } from "react";
import firebase from "firebase";


const Add = () => {
    const[value, setValue] = useState();

    const db = firebase.firestore();

    const getValue = (event) => {
        setValue(event.target.value);
    };

    const addValue = () => {
        db.collection("products")
        .doc(value)
        .set({
            value: value,
        })
        .then(function () {
            console.log("Value successfully written!");
        })
        .catch(function (error) {
            console.log("Error writing Value: ", error);
        });

        };
    

    return (
        <>
        <input type="text" onBlur={getValue}></input>

        <button type="button" onClick={addValue}>Add</button>
        </>
    );
};

export default Add;