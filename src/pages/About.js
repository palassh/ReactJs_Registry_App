import React from 'react';
import { useState, useEffect } from 'react';

function About() {
    const [userData, setUserData] = useState([]);
    const [TextInput, setTextInput] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        if (TextInput.length > 10) setError(true);
        else setError(false);
    }, [TextInput])

    const removeItem = (index) => {
        let newData = [...userData];
        newData.splice(index, 1)
        setUserData(newData);
    }

    const editItem = (index) =>{
        if(error) return;
        let newData = [...userData];
        newData[index] = TextInput;
        setUserData(newData);
    }

    const addItem = (e) => {
        if(error) return;
        e.preventDefault();

        const tempData = [...userData];
        tempData.push(TextInput)
        setUserData(tempData)
        setTextInput("")
    }

    console.log(userData);

    return (
        <div>
            <form onSubmit={addItem}>
                <label>Text input:
                    <input type="text" value={TextInput} onChange={(e) => setTextInput(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {error ? <span style={{ color: "red" }}>error occured</span> : null}
            {
                userData.map((item, index) => {
                    return (
                        <li key={index}>{item} <button onClick={() => removeItem(index)}>Remove</button> <button onClick={()=> editItem(index)}> update </button></li>
                    )
                })
            }
        </div>
    );
}

export default About;