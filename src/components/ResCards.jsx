import { CARD_IMG_MAIN_URL } from "../utilits/constents";
import { Link } from "react-router-dom";

const Cards = ({data}) => {
  if (data == "") {
    return (
      <div className="res-card w-60 bg-teal-300">
        <h1>Heading</h1>
        <h2>Food name</h2>
        <h3>Rating</h3>
      </div>
    );
  }
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines , id} =
    data?.info;

  return (
    <Link to={'/restaurents/'+id} className="flex items-stretch flex-column hover:bg-slate-100 shadow-lg shadow-slate-400  hover:shadow-slate-600 w-52 flex-auto">

    <div className="res-card w-full bg-lime-900 p-2 rounded text-yellow-50" >
      <div className="h-1/2">
      <img src={CARD_IMG_MAIN_URL + cloudinaryImageId} alt="image" className="rounded object-cover w-full h-full shadow-slate-50 shadow-sm transition" />
      </div>
      <h1 className="mt-4">{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>Rating: {avgRating}</h3>
      <h3> Price - {costForTwo}</h3>
    </div>

    </Link>
  );
};

export const withPromotedCards = (ResCard) => {

  return (props) =>{
    return <div className="flex items-stretch w-52 flex-auto">
      <label className=" absolute rounded py-2 px-4 bg-red-600 text-slate-50 text-lg -m-2">Promoted</label>
      <ResCard {...props}/>
    </div>
  }
}

export default Cards;
