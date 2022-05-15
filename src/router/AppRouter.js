import React from "react";
import { useRoutes } from "react-router-dom";
import { Intro } from "../introlayer/Intro";
import { FirstOp } from "../rpglayers/FirstOp";
import { SecondOp } from "../rpglayers/SecondOp";
import { NotFound } from "../notfound/NotFound";
import { ThirdOp } from "../rpglayers/ThirdOp";
import { LandingPort } from "../portlayers/LandingPort";

export const AppRouter = () => {
  const routes = useRoutes([
    { path: "/portfolio", element: <Intro /> },
    { path: "/portfolio/intro", element: <LandingPort /> },
    { path: "/portfolio/rpgending", element: <FirstOp /> },
    { path: "/portfolio/rpgending/two", element: <SecondOp /> },
    { path: "/portfolio/rpgending/three", element: <ThirdOp /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};
