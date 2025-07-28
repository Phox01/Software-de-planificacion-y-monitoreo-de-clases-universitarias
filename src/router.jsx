import { createBrowserRouter } from "react-router-dom";
import Home from "./Views/Home";
import Classes from "./Views/Classes.jsx";
import Profile from "./Views/Profile.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/classes",
    // classes/:subjectId
    element: <Classes />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
