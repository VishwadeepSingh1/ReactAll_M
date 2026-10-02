import Item from "./Item";
import { useState } from "react";
    const Fooditems=({items})=>{
let [activeItems,setActiveItem]=useState([]);
let onBuyButton=(item,event)=>{
  let newItems=[...activeItems,item];
  setActiveItem(newItems);

}
    return (
    <ul className="list-group">
 {items.map((item)=>(
   <Item key={item} 
   bought={activeItems.includes(item)}
   foodItem={item}  handelBuyButton={(event)=>onBuyButton(item,event)}></Item>
 ))}
 
  
</ul>
    );
}
export default Fooditems;