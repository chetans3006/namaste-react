import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <h3>
        {error.status} - {error.statusText}
      </h3>
      <p>{error.data}</p>
    </div>
  );
};
export default Error;
