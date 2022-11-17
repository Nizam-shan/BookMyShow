import React from "react";

//components
import Navbar from "../components/navbar/navbar.component";

// hero carousel
import HeroCarousel  from "../components/hero-carousel/hero-carousel.component";

const DefaultLayout = (props) => {
  return (
    <>
    <Navbar />
    <HeroCarousel />
    {props.children}
    </>
  )
}

export default DefaultLayout;
