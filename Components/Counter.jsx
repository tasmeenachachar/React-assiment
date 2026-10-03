// import { useState } from "react"
import { useState } from "react";
import "./Style.css";


function Counter(){
const [count,setCount] = useState(0);
return(
<div className="Counter">  

<h1>This is  counter app</h1>
<h2>
{count}
    
</h2>
<button className="btn increase"  onClick={()=> setCount (count +1)}>
  increaseing
    </button>

<button  className="btn decrease" onClick={()=> count > 0 && setCount  (count -1)}> 
     dicreaseing
    </button>


<button className="btn reset"  onClick={() => setCount(0)}>
Reset
</button>








</div>


);



}
  export default Counter