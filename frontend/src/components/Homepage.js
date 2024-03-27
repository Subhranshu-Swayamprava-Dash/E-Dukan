import React from 'react'
import SlideImage from './SlideImage'
import {images} from '../images';
import Phones from './Phones';
import Fashion from './Fashion';
import Wfashion from './Wfashion';
import Mshoes from './Mshoes';
import Womenshoes from './Womenshoes';
import specialoffer from '../images/specialoffer2.jpg';
import fashionbanner from '../images/fashionbanner.avif';
import Furniture from './Furniture';
import phoneoffer from '../images/phoneoffer.jpg';
import Electronics from './Electronics';
import beauty from '../images/beautyoffer.jpg';
import Beauty from './Beauty';
import shoesoffer from '../images/shoesoffer.webp'
import Signup from './Signup';
import Login from './Login';
const Homepage = () => {
  return (
    <div className='Ecomp'>
     
      <div><SlideImage slides={images}/></div>
      <Phones/>
      <Fashion/>
      <img src={fashionbanner} className='specialoffer'></img>
      <Wfashion/>
      <img src={beauty} className='specialoffer'></img>
      <Mshoes/>
      <img src={phoneoffer} className='specialoffer'></img>
      <Womenshoes/>
      <img src={specialoffer} className='specialoffer'></img>
      <Furniture/>
      <img src={shoesoffer} className='specialoffer'></img>
      <Electronics/>
      <Beauty/>
    </div>
  )
}

export default Homepage
