import React from 'react'
import { selectOneProduct } from '../Product/ProductSlice'
import { useAppSelector } from "../app/hooks";


const Rating = ( ) => {
    const OneProd = useAppSelector(selectOneProduct);

    // This component check the rating product and reurnd star accordingly
  return (
    <div>
    {OneProd.map((item, index) => <div key={index} className='rating'>
        {/* Check if rating bigger 1 so i get a star or helf star  */}
        <samp>
            <i className={item.rating >= 1? 'fas fa-star': item.rating >= 0.5? 'fas fa-star-half-alt': 'far fa-star'} style={{color:'gold'}}> </i>
        </samp>
        {/* Check if rating bigger 2 so i get a star or helf star  */}
        <samp>
            <i className={item.rating >= 2? 'fas fa-star': item.rating >= 1.5? 'fas fa-star-half-alt': 'far fa-star'} style={{color:'gold'}}> </i>
        </samp>
        {/* Check if rating bigger 3 so i get a star or helf star  */}
        <samp>
            <i className={item.rating >= 3? 'fas fa-star': item.rating >= 2.5? 'fas fa-star-half-alt': 'far fa-star'} style={{color:'gold'}}> </i>
        </samp>
        {/* Check if rating bigger 4 so i get a star or helf star  */}
        <samp>
            <i className={item.rating >= 4? 'fas fa-star': item.rating >= 4.5? 'fas fa-star-half-alt': 'far fa-star'} style={{color:'gold'}}> </i>
        </samp>
        {/* Check if rating bigger 5 so i get a star or helf star  */}
        <samp>
            <i className={item.rating >= 5? 'fas fa-star': item.rating >= 4.5? 'fas fa-star-half-alt': 'far fa-star'} style={{color:'gold'}}> </i>
        </samp>
    <span>
        {item.rating && item.rating} / 5 
    </span></div>)}
    </div>
    
  )
}

export default Rating