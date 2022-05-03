import React from "react";
import { NavLink } from "react-router-dom";
import bonfire from "../imgs/bonfire.gif";

export const Intro = () => {
  return (
    <div className="font-darksus">
      <h1 className="titles">ALAN JAVIER CANELLAS</h1>
      <h2 className="subtitles">Front-End Developer</h2>
      <img src={bonfire} alt="bonfire" />
      <p className="overtitles">-do you want to see my portfolio?-</p>
      <div className="buttons">
        <NavLink to="/" class="darkbutton">
          <p>yes, im interested!</p>
        </NavLink>
        <NavLink to="/rpgending">
          <p>Definitely not what i came for</p>
        </NavLink>
      </div>
      <p class="suggest">(Suggestion: Stay close to the bonfire)</p>
    </div>
  );
};
