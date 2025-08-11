import { createBrowserRouter } from "react-router-dom";
import Home from "./Views/Home";
import Classes from "./Views/Classes.jsx";
import Profile from "./Views/Profile.jsx";
import LogIn from "./Views/LogIn.jsx";
import SignUp from "./Views/SignUp.jsx";
import CreateSubject from "./Views/createSubject.jsx";

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
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/create-subject",
    element: <CreateSubject />,
  },
]);
