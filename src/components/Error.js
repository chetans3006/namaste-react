import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="m-2 p-2 border border-solid border-black rounded-md shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
      <h1 className="text-2xl font-bold my-2 text-center ">
        Oops! Something went wrong{" "}
      </h1>
      <h3 className="text-xl font-semibold my-2">
        {error.status} - {error.statusText}
      </h3>
      <p className="text-gray-600 text-sm my-2 p-2">{error.data}</p>
    </div>
  );
};
export default Error;
