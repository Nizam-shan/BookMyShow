import React from "react";
import MovieNavbar from "../components/navbar/movieNavbarComponent";

//components


// hero carousel


const MovieLayout = (props) => {
  return (
    <>
   <MovieNavbar />
    
    {props.children}
    </>
  )
}

export default MovieLayout;
