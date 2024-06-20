
import {  useState } from "react";
import Shimmer from "./Shimmer";
import useFetchRestaurentMenu from "../utilits/useFetchRestaurentMenu";
import RestaurentCategories from "./RestaurentCategori";

const RestaurentMenu = () => {
   const restaurentMenuList = useFetchRestaurentMenu();
    const [showItemIndex, setShowItemIndex] = useState(0);

if(restaurentMenuList == null){
    return <div className="resMenu">
       <Shimmer/>
    </div>
}

return <div className="SaperateRes">

    {restaurentMenuList.map((res, index)=>
    {
       const {title , itemCards } = res?.card?.card;

       return <RestaurentCategories key={index} 
            title = {title}
            itemCards = {itemCards}
            showItemIndex = { index === showItemIndex  } 
            setShowItemIndex = {()=>setShowItemIndex(index == showItemIndex ? -1 : index)}
        /> 

    } )}
     
    </div>
}

export default RestaurentMenu;