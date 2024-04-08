import React, { useMemo, useState } from 'react';
const App=()=>{
    const [number,setNumber]=useState(0);
    const [dark,setDark]=useState(false);
    const doubleNumber=useMemo(()=>{
    return slowFunction(number);
},[number]);
    const themeChange={
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    };
    return <>
    <div>
    <input type="number" name="number" id="number" onChange={(e)=>setNumber(Number(e.target.value))}/>
    </div>
    <br />
    <hr/>
    <br/>
    <div>
        <button onClick={()=>setDark(!dark)}>Change Theme</button>
    </div>
    <br/>
    <h2 style={themeChange}>The number : {doubleNumber}</h2>
    </>
};

const slowFunction=(number)=>{
    for (let index=0;index<10000000;index++){}
    console.log("Slow fun running");
    return number ** 2;
};

export default App;