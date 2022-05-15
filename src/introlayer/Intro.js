import React from "react";
import { Link } from "react-router-dom";
import bonfire from "../imgs/bonfire.gif";

export const Intro = () => {
  return (
    <div className="font-darksus">
      <h1 className="titles">ALAN JAVIER CANELLAS</h1>
      <h2 className="subtitles">Front-End Developer</h2>
      <img src={bonfire} alt="bonfire" />
      <p className="overtitles">-do you want to see my portfolio?-</p>
      <div className="buttons">
        <Link to="/portfolio/intro">
          <button class="darkbutton">yes, im interested!</button>
        </Link>
        <Link to="/portfolio/rpgending">
          <button class="darkbutton">Definitely not what i came for</button>
        </Link>
      </div>
      <p class="suggest">(Suggestion: Stay close to the bonfire)</p>
    </div>
  );
};
