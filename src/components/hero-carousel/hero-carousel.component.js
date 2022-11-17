import React,{useState,useEffect} from "react";

import HeroSlider from "react-slick";
//import arrows
import { NextArrow,PrevArrow } from "./arrows.component";

import axios from "axios";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeroCarousel = () => {
    const [images, setImages] = useState([]);
        useEffect(() => {
            const requestNowPlaying = async() => {
                const getImages = await axios.get("/movie/now_playing");
                console.log(getImages);
                setImages(getImages.data.results)
            }
            requestNowPlaying();
        },[]);

    const settingsLg = {
        autoplay : true,
        arrows : true,
        centerMode:true,
        slidesToShow : 1,
        slidesToScroll : 1,
        centerPadding : "80px",
        infinite: true,
       nextArrow  : <NextArrow />,
       prevArrow : <PrevArrow />
    }

    const settings = {
        arrows : true,
        autoplay : true,
       
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow  : <NextArrow />,
       prevArrow : <PrevArrow />
      };



return (
    <>
        <div className="lg:hidden">
        <HeroSlider {...settings}>
        {
            images.map((image) =>(
                <div className="w-full h-48 md:h-80 py-1">
                    <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}  className="w-full h-full rounded-sm "></img>
                </div>
            ))
        }
        
    </HeroSlider>
        </div>

        <div className="hidden lg:block bg-gray-100">
        <HeroSlider {...settingsLg}>
        {
            images.map((image) =>(
                <div className="w-full h-80 px-1 py-2">
                    <img  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} className="w-full h-full rounded-md "></img>
                </div>
            ))
        }
        
    </HeroSlider>
        </div>








    
    </>
)
}
export default HeroCarousel; 
