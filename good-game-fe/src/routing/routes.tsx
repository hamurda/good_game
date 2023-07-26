import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import NewGame from "../pages/NewGame";
import NewUser from "../pages/NewUser";

const router = createBrowserRouter([
    {path:"/", element:<App/>},
    {path:"/login", element:<Login/>},
    {path:"/newGame", element:<NewGame/>},
    {path:"/signUp", element:<NewUser />},
])

export default router;