import React from 'react'
import './Vitamins.css'
import boy from '../../Assetes/boy.png'
import girl from '../../Assetes/girl.png'

export const Vitamins  = () => {
  return (
    <div className="herom">
        <div className="right-hm">
            <div className="hero-textm">
              <span>01</span>
              <div className="stroke-text">
              <span>vitamins</span>
              </div>
              <div>
                <span>and minerals</span>
              </div>
              <div>
                <span>
                  <li>vitamins A, B, C, D, E and K</li>
                  <li>minerals like calcium, iron, iodine and zinc</li>
                  The best way for your child to get enough vitamins and minerals is by eating a wide variety of foods from the five healthy food groups:

                  <li>Vegetables</li>
                  <li>fruits</li>
                 </span>
      
              </div>
            </div>
            <img src={girl} alt="" className='hero-img2m'/>
        </div>
        <div className="left-hm">
          
             

        </div>
    </div>
  )
}

export default Vitamins