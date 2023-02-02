import React from "react";
import { IconName } from "react-icons/ai";
import {IoAddCircleSharp} from "react-icons/fa";
 

const Lists = (props) => {
    return<>
   
    <div className="todolist_styles">
    {/* <button type="submit" onClick={deleteItem}> +</button> */}
     <ul> <button type="submit" onClick={
        ()=>{
            props.onSelect(props.id)
        }
     }> +</button>{props.text}</ul>
     </div>
     </>
};

export default Lists;