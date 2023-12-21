import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes.jsx";
import AuthProvider from "./Provider/Authprovider.jsx";
import { HelmetProvider } from "react-helmet-async";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DndProvider backend={HTML5Backend}>
        <HelmetProvider>
          <RouterProvider router={Routes}></RouterProvider>
        </HelmetProvider>
      </DndProvider>
    </AuthProvider>
  </React.StrictMode>
);
