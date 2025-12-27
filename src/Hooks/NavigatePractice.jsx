import { useState } from "react";
import { useNavigate } from "react-router-dom"

function NavigatePractice(){
let [firstname, setfirstName] =useState();
let [lastname,setlastName]=useState();
let [password,setPassword]=useState();
let [email,setEmail]=useState();
let [mobile,setMobile]=useState();
const [fruit, setFruit] =useState();
let information=(e)=>{
    e.preventDefault();
 console.log(firstname,lastname,password,email,mobile,fruit);
}

    let menu=useNavigate();
    const menured = ()=>{
        menu("/")
    }
    return(
        <>
        <button onClick={menured}>Click Here</button>
        <form onSubmit={information}>
            <input type="text" placeholder="Firstname" onChange={(e)=>setfirstName(e.target.value)}/>
            <input type="text" placeholder="LastName" onChange={(e)=>setlastName(e.target.value)}/>
            <input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
            <input type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="tel" placeholder="Enter Mobile Number"onChange={(e)=>setMobile(e.target.value)} />
  <label htmlFor="fruits">Choose a fruit:</label>
        <select id="fruits" placeholder="fruits" onChange={(e)=>setFruit(e.target.value)} value={fruit}>
          <option value="">Select</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="cherry">Cherry</option>
        </select>
            <input type="submit" />
            
        </form>
        </>
    )
}
export default NavigatePractice;