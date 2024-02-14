import React from 'react';
import {Feature} from "../../components";
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className ="gpt3__whatgpt3-feature" >
        <Feature title="What is GPT-3" text="GPT-3, a linguistic marvel, unleashes creativity by churning out text, translating languages, and even composing music.Think of it as a genie with a massive vocabulary, waiting for your prompt to grant your wordsmith wishes."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The Possibilities are beyond your imagination </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
         <Feature title="Chatbots" text="Chatbots, your virtual companions, converse like friends, answer questions like wizards, and automate tasks like tireless helpers."/>
         <Feature title="Knowledgebase" text="Your wisdom vault, overflowing with facts, figures, and insights, meticulously organized for instant retrieval. It fuels research, answers questions, and empowers decisions."/>
         <Feature title="Education" text="The journey of igniting curiosity, sculpting minds, and unlocking potential. It sows seeds of understanding, cultivates critical thinking, and shapes the future generation."/>
      </div>
    </div>
  )
}

export default WhatGPT3