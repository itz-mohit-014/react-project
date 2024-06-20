import { useEffect, useState } from "react";
import { RESTRAURENT_MENU } from "../utilits/constents";
import { useParams } from "react-router-dom";

const useFetchRestaurentMenu = () => {
    const {resId} = useParams();
    const [restaurentMenu, setRestaurentMenu] = useState(null);

    useEffect(()=>{
        fetchMenu();
    }, [])
    
    const fetchMenu = async () => {
        const res = await fetch(RESTRAURENT_MENU+resId)
        const data = await res.json();
        console.log(data?.data);
        const menuData = data?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((res)=>{
            return res.card.card["@type"]== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        }) ;
    
        setRestaurentMenu(menuData);
    }

    return restaurentMenu;

}

export default useFetchRestaurentMenu;