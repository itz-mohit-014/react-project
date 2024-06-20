import { useEffect, useState } from "react";
import { RESTRAURENT_API_URL } from "./constents";

const useFetchRestraurentData = () => {

    const [cardsData, setCardsData] = useState([]);
    const [allRestroCard, setAllRestroCard] = useState([]);

    useEffect(() => {
        fetchData()
    } , [])

    console.log(cardsData)

    const fetchData = async  () => {
        try {
            const res = await fetch(RESTRAURENT_API_URL);
            const allResData = await res.json();
            const { restaurants } =
            allResData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle;  
            setCardsData(restaurants)
            setAllRestroCard(restaurants);
            
        } catch (error) {
            console.log(error)
        }
    }
    
    
    return [cardsData, setCardsData, allRestroCard, setAllRestroCard];

}

export default useFetchRestraurentData;