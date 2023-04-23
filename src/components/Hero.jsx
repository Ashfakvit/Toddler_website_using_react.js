import React from 'react'
import './Hero.css'
import '../App.css'
import bg from '../Assetes/main.png'
import bar from '../Assetes/bar.png'
import Header from '../components/Header/Header'
 export const Home = () => {
  return (
    <div className="App">
    <div className='Navbar'>
      <Header ></Header>
    <div className="hero">
     
        <div className="left-h">
            <div className="the-best">
              <div></div>
              <span>The Best site for kids</span>
            </div>
            <div className="hero-text">
              <div className="stroke-text"><span>ready</span>
              <span> To</span>
              </div>
              <div>
                <span>read</span>
              </div>
              <div>
                <span>
                The world is on tech why the toddlers not?<br></br>paly the games earn the knowlage </span>
              </div>
            </div>
                {/*fig*/}
            <div className="figure">
                <div>
                  <span>1</span>
                  <span>Games</span>
                </div>
                <div>
                  <span>1</span>
                  <span>Quiz</span>
                </div>
                <div>
                  <span>+15</span>
                  <span>produts</span>
                </div>
              </div>
              <div className="herobutton">
                <button className="btn">Games
                  </button>
                  <button className="btn">
                    About Us
                  </button>
              </div>
        </div>
        <div className="right-h">
          <button className='btn'>Join Now</button>
          
           <img src={bg} alt="" className='hero-img' />

             <div className="active">
                <img src={bar} alt="" />
                   <div>
                    <span>Active users</span>
                    <span>+7,10,00,000</span>
                   </div>
             </div>

        </div>
    </div>
    </div>
    </div>
  )
}

export default Home