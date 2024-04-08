import React, { useCallback, useState } from 'react';
import Button from './Button';
import Title from "./Title";
import Count from "./Count";

const  App =()=> {
    const [age,setAge]=useState(0);
    const [salary,setSalary]=useState(7000);

    const incrementAge=useCallback(()=>{
        setAge(age+1);
    },[age]);

    const incrementSalary = useCallback(()=>{
        setSalary(salary+2000);
    },[salary]);

  return (
    <div>
        <Title/>
        <Count text={"age"} number={age}/>
        <Button clickHandler={incrementAge}>Increment Age</Button>
        <Count text={"salary"} number={salary}/>
        <Button clickHandler={incrementSalary}>Increment salary</Button>
    </div>
  );
};

export default App;