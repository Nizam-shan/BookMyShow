import React from "react";

import Slider from "react-slick";

// component 
import Poster from "../poster/poster.component";

// settings(slider) imported from this file
import settings from "../../confiq/PosterCarousel.config";

// images for premier imported from this file
import PremierImages from "../../confiq/TempPoster.config";

export const Premier = () => {

  
    return (
        <>
        {/* <div className="flex flex-col">
        <h1 className="text-white text-2xl font-bold px-2">Premieres</h1>
        <h6 className="text-white px-2">Brand new release every Friday</h6>
        </div>
        <Slider {...settings}>
           {
             PremierImages.map((image) => (
                <Poster {...image} isDark />
                ))
           }
        </Slider> */}
        </>
    );
};