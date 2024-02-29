import { useState } from "react";

const User =(props)=>{
    const[count,setCount]=useState(0);
    return(
        <div className="about">
            <h1>{props.name}</h1>
<button onClick={()=>{
    const count = count+1;
    setCount(count)
    setCount(console.log("hello button"))
}}>
button
</button>
            <h2>location</h2>
        </div>
    )
}
export default User;