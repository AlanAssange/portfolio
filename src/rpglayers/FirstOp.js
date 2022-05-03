import React from "react";
import bonfire from "../imgs/bonfire.gif";
import { NavLink } from "react-router-dom";

export const FirstOp = () => {
  return (
    <div className="font-darksus">
      <h2 className="dec-chart">
        You take a half turn, but you dont know exactly where you are going.
        With the bonfire behind and no lead of where home is, you start to
        realize something. There is a very loud noise coming in your direction.
        <br />
        It seems familiar. Like a dog. Maybe.
      </h2>

      <img className="dec-bon" src={bonfire} alt="bonfire" />
      <div className="buttons">
        <NavLink to="/rpgending/two" className="darkbutton">
          <p>Embrace destiny</p>
        </NavLink>
        <NavLink to="/" className="darkbutton">
          <p>Go back to the bonfire</p>
        </NavLink>
        <NavLink to="/" className="darkbutton">
          <p>Call for help</p>
        </NavLink>
      </div>
    </div>
  );
};
