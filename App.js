import React, { useState } from "react";
import Lists from "./Lists";
import { IconName } from "react-icons/ai";
import {IoAddCircleSharp} from "react-icons/fa"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Nunito:wght@200;300;400;600;700&display=swap');
</style>


{/* <script src="https://kit.fontawesome.com/ed8c4d9aea.js" crossorigin="anonymous"></script>  */}
const App = () =>{
  const [inputlist, setinputlist]= useState("Buy apple");
  const [item, setitem]= useState([]);

  const itemEvent=(events)=>{

    setinputlist(events.target.value)
  } 
  const addlistitem =()=>{
      setitem((olditem)=>{
        return [...olditem,inputlist]
      })
      setinputlist("");
  }

  const deleteItem=(id)=>{
    console.log("deleted ");

    setitem((olditem)=>{
      return olditem.filter((arrElement,index)=>{
        return index !== id;
      })
    })
 }

  return(
    <>
    <div className="main_div"> 
     <div className="center_div">
      <br/>
         <h1>TODO-list</h1>
      <br/>
    <input type="text" placeholder=" Add your works "  value={inputlist}  onChange={itemEvent}/>  
    <button onClick={addlistitem}>  +</button>
    <ol>
      {/* <li>{inputlist}</li> */}
      {
        item.map((itemval,index) => {
          // return <ul>{itemval}</ul>
         return  <Lists key={index} 
         id={index} 
         text={itemval}
         onSelect={deleteItem}
         />;
          }
        )
      }
    </ol>
    </div>
    </div>
    </>
  );

}

export default App;
