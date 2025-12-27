import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavigateHooks(){
let [name, setName] = useState();
let [mobile, setMobile] =useState();
let getuserdata=(e)=>{
    e.preventDefault();
    console.log(name,mobile);
}
    let nav=useNavigate();
    const navMenu = () => { 
        nav("/about") 
   }
  
   
    return(
        <>
        <button onClick={navMenu}>Click Here</button>
        <form onSubmit={getuserdata}>
            <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
            <input type="Number" placeholder="Mobile" onChange={(e)=>setMobile(e.target.value)}/>
<input type="submit" />
        </form>
        </>
    )
}
export default NavigateHooks;