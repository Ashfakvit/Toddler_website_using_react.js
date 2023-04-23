import React from 'react'
import './Eating.css'
import back2 from '../../Assetes/back2.png'

export const Eating = () => {
  return (
    <div className="heroe">
        <div className="right-he">
          
            <div className="hero-texte">
              <span>02</span>
              <div className="stroke-texte">
              <span>Healthy</span>
              </div>
              <div>
                <span>eating habits</span>
              </div>
              <div>
                <span>
                Children’s appetites can change from day to day. These changes are usually nothing to worry about.

Sometimes your child might want to eat a lot. That’s fine. Just make sure that you fill up your child with healthy food.

Other times your child might not want to eat as much. That’s OK too. If your child doesn’t want to eat, they’ll probably make up for it at the next meal or even the next day. It’s best not to force things or offer other foods as rewards, because this teaches children not to listen to their appetites.

As a parent you give your child healthy food and opportunities to eat it. It’s up to your child to decide how much to eat – or whether to eat at all. If your child is growing and developing well, they’re probably getting enough to eat
                 </span>
                 </div>
            </div>
        </div>
        <div className="backe">
        
        </div>
        <div className="left-he">
            <img src={back2} alt="" />
            
        </div>
        
    </div>
  )
}

export default Eating