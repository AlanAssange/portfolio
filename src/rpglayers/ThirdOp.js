import React from "react";
import { Link } from "react-router-dom";
import werewolf from "../imgs/werewolf.png";

export const ThirdOp = () => {
  return (
    <div className="font-darksus">
      <h2 className="dec-chart">
        Nice try. But a fist is not enough. The beast evades your attack. By
        this time, you are unconscious. <br /> If you managed to reach this
        ending, thank you for playing. In case you need a helping hand, you can
        rely on me! <br /> ask for help and you shall receive.
      </h2>

      <img className="wer-img" src={werewolf} alt="pixeled werewolf" />
      <p className="wer-hp">Werewolf HP: 5/5</p>
      <div className="buttons">
        <Link to="/portfolio">
          <p className="darkbutton">Home</p>
        </Link>
      </div>
    </div>
  );
};
