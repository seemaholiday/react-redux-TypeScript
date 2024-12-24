import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UserList from "./pages/userList"
import UserCreate from "./pages/userCreate"
import UserDetail from "./pages/userDetail"
const router = createBrowserRouter([
    {
        path:"/",
        element:<UserList/>
    },
    {
        path:"/userCreate",
        element:<UserCreate/>
    },
    {
        path:"/userDetail/:id",
        element:<UserDetail/>
    }
])
const Router=()=>{
    return(
        <RouterProvider router={router}/>
    )
}
export default Router