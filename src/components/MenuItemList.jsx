import { CARD_IMG_MAIN_URL } from "../utilits/constents"; 

const MenuItemList = ( {itemCards}) => {
   return itemCards.map((item)=>{
        const {description, name, imageId, price, defaultPrice} = item?.card?.info;
    return <div key={item?.card?.info?.id} className="menuList flex justify-between w-full bg-slate-200 gap-2 p-2 my-2 shadow-sm shadow-black " >
        <div className="w-9/12">
            <h1 className="text-md text-orange-500 ">{name} </h1>
            <h3 className="font-bold">Price -  ₹{price / 100 || defaultPrice / 100}</h3>
            <p className="text-xs">{description}</p>
        </div>
        <img src={CARD_IMG_MAIN_URL+imageId} alt={name} className="w-3/12 max-w-28 max-h-28 shadow-slate-500 shadow-md"/>

    </div>
    })
}

export default MenuItemList;