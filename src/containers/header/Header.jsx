import React from 'react';
import './header.css';
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"


const Header = () => {
  return (
    <div className = "gpt3__header section__padding" id = "home">
      <div className = "gpt3__header-content">
        <h1 className = "gradient__text">Let's Build something amazing with GPT3 OpenAI</h1>
        <p> Unleash your GPT-3-powered creation into the world! Let your poem touch hearts, your song move souls, or your code spark awe. Every line of code, every note, every brushstroke has the potential to ignite the next wave of human-AI collaboration.</p>

        <div className = "gpt3__header-content__input">
          <input type = "email" placeholder = "Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className ="gpt3__header-content__people">
          <img src={people} alt ="People" />
          <p>1600 people requested access a visit in last 24 hours</p>
        </div>

      </div>
      <div className ="gpt3__header-image">
          <img src={ai} alt="ai"/>
      </div>
    </div>
  )
}

export default Header