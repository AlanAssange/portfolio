import React from "react";
import { NavLink } from "react-router-dom";
import werewolf from "../imgs/werewolf.png";

export const SecondOp = () => {
  return (
    <div className="font-darksus">
      <h2 className="dec-chart">
        It was a werewolf. And now he is in front of you. I've never seen a
        human fighting such a beast with his own bare hands, but you can try.
        You always can.
      </h2>
      <img className="wer-img" src={werewolf} alt="pixeled werewolf" />
      <p className="wer-hp">Werewolf HP: 5/5</p>
      <div className="buttons">
        <NavLink to="/rpgending/three" className="darkbutton">
          <p>ATTACK</p>
        </NavLink>
        <NavLink to="/" className="darkbutton">
          <p>RUN</p>
        </NavLink>
      </div>
    </div>
  );
};
