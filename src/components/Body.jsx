import React, { useEffect } from 'react'
import { useContext } from 'react';
import UserContext from "../../Util/UserContext";

export default function Body() {
  useEffect(()=>{
// getRestaurnt()
  },[])
  const data=useContext(UserContext)
  console.log(data,"thega");
  async function getRestaurnt(){
    try {
      
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json =await data.json()
    console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div >
        <input type="text" className='search-input' placeholder='Search' value="" onChange={()=>{}} />
     <button onMouseEnter={()=>console.log("chakkara")}>Search</button>
     <h1>{data.loggedUser}</h1>
      </div>
      body
    </div>
  )
}
