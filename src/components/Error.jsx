import { useRouteError } from "react-router";

const Error = () => {
    const error = useRouteError();

    {console.log(error)}
    return <div id="error-section">
        <h1>Oops!!!</h1>
        <p>Something went wrong...</p>
        <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
}

export default Error;