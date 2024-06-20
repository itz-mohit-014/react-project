import Cards, { withPromotedCards } from "./ResCards";
import { useState, useContext } from "react";
import useFetchRestraurentData from "../utilits/useFetchRestraurentData.js" ;
import Shimmer from "./Shimmer.jsx";
import UserContext from "../utilits/UserContext.js";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const PremotedCard = withPromotedCards(Cards);

  const { userData , setUserData } = useContext(UserContext);
  const [ userDataInfo , setUserDataInfo]  = useState(userData);


  // const [allRestroCard, setAllRestroCard] = useState(null);
  
  const [cardsData, setCardsData, allRestroCard ] = useFetchRestraurentData();
  
  // const [cardsData, allRestroCard] = useFetchRestraurentData();
  
  const handleSearch = (e)=>{
    setUserData(
      { ...userData,
      name:e.target.value
    })
    setSearchText(e.target.value);
  }

  return (
    <div className="body">
      <div className="top flex items-center gap-4 m-4 flex-wrap">

        <input className="py-2 px-4 border-2 border-solid border-blue-400" type="text" placeholder="search" id="search-text" value={searchText} onChange={handleSearch}/>

        <button className="bg-slate-900 px-8 py-3 rounded-lg text-white text-lg hover:bg-slate-500 transition"
        type="button" id="submit-btn" onClick={()=>{

            const searchRestro = allRestroCard.filter((res)=>{
                return String(res?.info?.name).toLowerCase().includes( searchText.toLowerCase().trim() ) || String(res?.info?.cuisines).toLowerCase().includes( searchText.toLowerCase().trim());
            })
            console.log(searchRestro)

            setCardsData(searchRestro);
       
       }}>
          Search
        </button>

        <button className="bg-slate-900 px-8 py-3 rounded-lg text-white text-lg hover:bg-slate-500 transition"
        type="button" id="top-rating-filter-btn" onClick={()=>{
            console.log('btn-click')
            if(cardsData.length < 1) return;
            const filterRestro = allRestroCard.filter((res)=>{
                return res?.info?.avgRating >= 4.5;
            })
            console.log(filterRestro)
            setCardsData(filterRestro);
        }}>
          Top Rated Restaurent
        </button>

        <button className="bg-slate-900 px-8 py-3 rounded-lg text-white text-lg hover:bg-slate-500 transition"
        type="button" id="top-rating-filter-btn" onClick={()=>{
            console.log('btn-click')
            if(cardsData.length < 1) return;
            setCardsData(allRestroCard);
        }}>
          Show All Restaurent
        </button>
      </div>
      
      <div role="list" className="card-container flex gap-4 items-stretch  p-8 m-4 flex-wrap w-fit border-2 border-red-400" >
        {cardsData.map((card_details, index) => {
          if(index % 2 == 0) {
            return <PremotedCard key={card_details.info.id} data={card_details}/>
          }
          return <Cards key={card_details.info.id} data={card_details}/>;
        })}
      </div>
    </div>
  );
};

export default Body;
