import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-7xl font-bold text-fuchsia-500">404</h1>
      <h2 className="text-xl font-semibold mt-2 uppercase">Page Not Found</h2>
      <p className="mt-2 text-gray-600">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="mt-4 bg-fuchsia-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default PageNotFound;
