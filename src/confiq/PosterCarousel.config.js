import React from "react";
const settings = {
    infinite : true,
    slidesToShow : 5,
    slidesToScroll : 2,
    InitalSlide : 0,

    responsive : [{
        breakpoint : 600,
        settings :{
            slidesToShow: 2,
            slidesToScroll:1,
            autoplay : true,
            infinite :true,
        }
    }],
    responsive : [{
        breakpoint : 1024,
        settings :{
            slidesToShow: 3,
            slidesToScroll:2,
            autoplay : true,
            infinite :true,
        }
    }]
};

export default settings;