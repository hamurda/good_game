import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import NewGame from "../pages/NewGame";

const router = createBrowserRouter([
    {path:"/", element:<App/>},
    {path:"/login", element:<Login/>},
    {path:"/newGame", element:<NewGame/>},
])

export default router;