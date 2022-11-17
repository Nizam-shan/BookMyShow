import React from "react";
import { Route } from "react-router-dom";


// layout
import MovieLayout from "../layouts/movie.layout";
const MovieHoc =({component:Component, ...rest}) => {
  //component
  // props -> exact , path
  return (
    <>
    <Route
    {...rest}
    component = {(...props) => (
        <MovieLayout>
        <Component{...props} />
        </MovieLayout>
    )
    }
    />
    </>
  )
}




export default MovieHoc;
