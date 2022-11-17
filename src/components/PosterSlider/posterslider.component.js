import Poster from "../poster/poster.component";
import React from "react";
import settings from "../../confiq/PosterCarousel.config";

import Slider from "react-slick";
const PosterSlider = (props) => {
    return (
        <>
             <div className="flex flex-col">
        <h1 className={
            `text-2xl font-bold ${
                props.isDark ? "text-white" : "text-gray"
            }`
        }>{props.title}</h1>
        <h6 className={
            `text-sm  ${
                props.isDark ? "text-white" : "text-gray"
            }`
        } >{props.subtitle}</h6>
        </div>
        <Slider {...settings}>
           {
             props.images.map((image) => (
                <Poster {...image} isDark={props.isDark} />
                ))
           }
        </Slider>
        </>
    )
};

export default PosterSlider