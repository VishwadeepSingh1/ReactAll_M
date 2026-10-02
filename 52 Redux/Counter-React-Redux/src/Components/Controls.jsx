import { useRef } from "react";
import { useDispatch } from "react-redux";

 const Controls=()=>{

const dispatch=useDispatch();
const inputElement=useRef()
const handelincrement=()=>{
    dispatch({type:'INCREMENT'});
}
const handeldecrementt=()=>{
    
     dispatch({type:'DECREMENT'
    
});
}
const handelADD=()=>{
     dispatch({type:'ADD',payload:{num:inputElement.current.value,
    },
});
inputElement.current.value=" ";
}

const handelSUB=()=>{
     dispatch({type:'SUB',payload:{num:inputElement.current.value,
    },
});
inputElement.current.value=" ";
}
const handelPRIVACY=()=>{
     dispatch({type:'PRIVACY'
});

}

    return <><button type="button"className="btn btn-primary"  style={{margin:"5px"}}  onClick={handelincrement}>+1</button>

<button type="button"className="btn btn-success" onClick={handeldecrementt}  style={{margin:"5px"}}>-1</button>
<button type="button"className="btn btn-warning" onClick={handelPRIVACY} >Privacy Toggle</button>
<div>
    <input type="number" placeholder="ENTER NUMBER" ref={inputElement} className="number-input"/>
<button type="button"className="btn btn-info" style={{margin:"5px"}} onClick={handelADD} >ADD</button>



<button type="button"className="btn btn-danger" style={{margin:"5px"}} onClick={handelSUB} >SUB</button>
</div>


</> 
}
export default Controls;