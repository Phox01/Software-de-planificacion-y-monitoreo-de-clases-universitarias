import { createBrowserRouter } from "react-router-dom";
import Home from './Views/Home'
import Classes from './Views/Classes.jsx';

export const router = createBrowserRouter([
{
    path: "/",
    element: <Home />
  },
  {
    path: "/classes",
    element: <Classes />
  }
])