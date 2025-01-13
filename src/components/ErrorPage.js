import { useRouteError, Link } from "react-router-dom"

function ErrorPage(){
    const error = useRouteError()
    console.log(error)

    return (
        <main>
            <h1>Whoops! Something went wrong!</h1>
            <h2>{error.data}</h2>
            <p>Click <Link to="/">here</Link> to return to the <strong>Home</strong> page</p>
        </main>
    )
}

export default ErrorPage