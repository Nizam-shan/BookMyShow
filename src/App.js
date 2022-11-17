

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// axios imported installed from axios-npm ---- package to render globally
import axios from "axios";


// hoc
import DefaultHoc from "./hoc/default.hoc";

import HomePage from "./pages/Homepage";
import MovieHoc from "./hoc/movie.hoc";

import MoviePage from "./pages/movie.page"

import Plays from "./pages/plays.page";

// axios default settings

axios.defaults.baseURL ="https://api.themoviedb.org/3"; // base url is only till 3
axios.defaults.params ={}; //telling that our params is empty and in next line params is using the api params
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;


function App() {
  return (
    <>
    <DefaultHoc path="/" exact component={HomePage} />
    <MovieHoc path ="/movie/:id" exact component={MoviePage} />
    <DefaultHoc path ="/plays" exact component={Plays} />
    </>
  );
}

export default App;
