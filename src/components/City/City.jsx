import React from 'react'
import './City.css'
import { food_list } from '../../Assets/Asset'
const City = () => {
  return (
    <div className='city-menu' id='city-menu'>
        <h1>Grab Your Favourite Cuisine!</h1>
       <div className='city-menu-list'>
            {food_list.map((item,index)=>{
                return(<>
                    <div key={index} className='city-menu-list-item'>
                        <img src={item.food_image} alt='' />
                        <p>{item.food_name}</p>
                    </div>
                    </>
                )
            })}
       </div>
       <hr />
    </div>
  )
}

export default City