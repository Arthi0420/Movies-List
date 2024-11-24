import { useContext } from "react";
import { MovieContext } from "../MovieContext";
import { Link } from "react-router-dom";

function FavMovie() {
  const { movies, removeFavourite } = useContext(MovieContext);

  return (
    <div>
      <div className="flex justify-between bg-red-400 text-white p-5 mx-6 underline decoration-black ">
        <h1 className="text-2xl font-medium ">

             {/* Link => List of Movies  */}
          <Link to="/">List of Movies</Link>
        </h1>
        <h1 className="text-2xl font-medium">

             {/* Link => Fav Movies List */}
          <Link to="/fav">Favourite Movies</Link>
        </h1>
      </div>
      {movies
        .filter((movies) => movies.isFavourite)
        .map((movies, index) => (
          <div className="flex justify-between mx-11 my-4 text-2xl" key={movies.id}>
            <h1 className="text-2xl font-medium">
              {index + 1}. {movies.name}
            </h1>
            <button
              onClick={() => removeFavourite(movies.id)}
              className="bg-red-700 text-white p-2 rounded-md">
              Remove
            </button> 
          </div>
        ))}
    </div>
  );
}

export default FavMovie;
