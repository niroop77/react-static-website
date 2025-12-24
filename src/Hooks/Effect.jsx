import { useEffect, useState } from "react";

function Effect(){

    // let count = 0;

    let [count, setCount] = useState(0);
   
    useEffect(() => {

console.log("hooks tested")


    },[]);
   
   let test=()=>{
    console.log("user submitted")
   }

   const increaseCount = () => {
    console.log(count)
        // count++;
        setCount(++count);
   }
    return(
        <>
        <h1>Hello</h1>
        <h2>Count is {count}</h2>

        <button onClick = {increaseCount}>Increment Count</button>
        <button onClick={test}>Click Here</button>
        </>
    )
}
export default Effect;