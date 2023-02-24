import React from "react";
import ClassComponent from "./component/classComponent";
import Calculator from "./component/calculator";


function Root (){
    return(
        <div> 
        <div style={{height:"500px", backgroundColor:"violet"}}>
           <ClassComponent title='Class'/> 
           <Calculator/>
        </div>
<a href="https://github.com/vasilakhan0805/Tasks/tree/master">Task's source code</a>
        </div>
    )
    
}

export default Root