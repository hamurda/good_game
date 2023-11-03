import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import NewUser from "../pages/NewUser";

const router = createBrowserRouter([
    {path:"/", element:<App/>},
    {path:"/login", element:<Login/>},
    {path:"/signUp", element:<NewUser />},
])

export default router;