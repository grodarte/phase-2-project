import App from "./App";
import ErrorPage from "./components/ErrorPage"
import Home from "./components/Home"
import Gifts from "./components/Gifts"
import NewGiftForm from "./components/NewGiftForm"
import RedirectPage from "./components/RedirectPage";

const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/gifts",
                element: <Gifts/>
            },
            {
                path: "/newgiftform",
                element: <NewGiftForm/>
            }
        ]

    },
    {
        path: "/redirecting",
        element: <RedirectPage/>
    }
]

export default routes