import { useState } from "react";
import MenuItemList from "./MenuItemList";
const RestaurentCategories = ({title, itemCards , showItemIndex , setShowItemIndex}) => { 

    console.log(showItemIndex, setShowItemIndex);
    
    return (
    <div className="bg-slate-500 w-9/12 mx-auto my-2 p-4 flex justify-between items-center flex-col cursor-pointer" onClick={(e)=>{
        setShowItemIndex()
    }}>
       <div className="flex justify-between items-center w-full">
        <h3 className="text-white">{title} ({itemCards.length})</h3>
        <span>⬇️</span>
       </div>
        {   

            showItemIndex  && <MenuItemList itemCards={itemCards} /> 
        }
    </div>
    )
}

export default RestaurentCategories;