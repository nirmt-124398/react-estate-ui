import React from "react";
import "./searchbar.scss";
import { useState } from "react";

const types=["Buy","Rent"]

const searchbar = () => {
  const [query, setquery] = useState({
    type: "Buy",
    location: "",
    minPrice: "",
    maxPrice: ""
  })
  const switchType=()=>{
    if(query.type==="Buy"){
      setquery({...query,type:"Rent"})
    }else{
      setquery({...query,type:"Buy"})
    }
  }
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type)=>(
          <button key={type} className={query.type===type?'active':''} 
          onClick={switchType}
          >
            {type}</button>
        ))}
      </div>
      <form action="">
        <input type="text" name="location" placeholder="City Location" />
        <input type="number" name="minPrice" min={0} max={1000000} placeholder="Min Price" />
        <input type="number" name="maxPrice" min={0} max={1000000} placeholder="Max Price" />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default searchbar;
