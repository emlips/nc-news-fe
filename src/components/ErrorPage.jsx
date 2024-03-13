import { Link } from "react-router-dom";

function ErrorPage({ errorMsg }) {
  return (
    <>
      <h1>Sorry! Something went wrong...</h1>
      <p>{errorMsg}</p>
      <Link to="/">Return to Homepage</Link>
    </>
  );
}

export default ErrorPage;
