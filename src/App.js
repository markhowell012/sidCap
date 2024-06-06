import React from "react";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes";
const App = () => {
  console.log("window.location", window.location.pathname);
  return <RouterProvider router={AppRouter} />;
};

export default App;
