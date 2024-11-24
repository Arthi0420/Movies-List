import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieProvider } from "./MovieContext";
import MovieList from "./components/MovieList"
import FavMovie from "./components/FavMovieList";

function App() {  
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} />         
          <Route path="/fav" element={<FavMovie />} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
