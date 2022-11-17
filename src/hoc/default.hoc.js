import React from "react";
import { Route } from "react-router-dom";

// layout
import DefaultLayout from "../layouts/default.layout";
const DefaultHoc =({component:Component, ...rest}) => {
  //component
  // props -> exact , path
  return (
    <>
    <Route
    {...rest}
    component = {(...props) => (
        <DefaultLayout>
        <Component{...props} />
        </DefaultLayout>
    )
    }
    />
    </>
  )
}




export default DefaultHoc;
