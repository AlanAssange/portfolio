import React from "react";
import bonfire from "../imgs/bonfire.gif";
import { Link } from "react-router-dom";

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
        <Link to="/portfolio/rpgending/two">
          <p className="darkbutton">Embrace destiny</p>
        </Link>
        <Link to="/portfolio">
          <p className="darkbutton">Go back to the bonfire</p>
        </Link>
        <Link to="/portfolio">
          <p className="darkbutton">Call for help</p>
        </Link>
      </div>
    </div>
  );
};
