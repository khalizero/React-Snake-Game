import React from "react";
import { Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Snake from "./pages/Snake";
import Settings from "./pages/Settings";

const routes = () => [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="snake" replace={true} /> },
      { path: "snake", element: <Snake /> },
      { path: "settings", element: <Settings /> },
    ],
  },
];

export default routes;
