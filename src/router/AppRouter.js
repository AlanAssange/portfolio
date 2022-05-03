import React from "react";
import { useRoutes } from "react-router-dom";
import { Intro } from "../introlayer/Intro";
import { FirstOp } from "../rpglayers/FirstOp";
import { SecondOp } from "../rpglayers/SecondOp";
import { NotFound } from "../notfound/NotFound";
import { ThirdOp } from "../rpglayers/ThirdOp";

export const AppRouter = () => {
  const routes = useRoutes([
    { path: "/", element: <Intro /> },
    { path: "/rpgending", element: <FirstOp /> },
    { path: "/rpgending/two", element: <SecondOp /> },
    { path: "/rpgending/three", element: <ThirdOp /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};
