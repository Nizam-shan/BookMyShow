import React from "react";
import EntertainmentCardSilder from "../components/entertainment-carousel/entertainment-card-component";
import {useState , useEffect} from "react"
import axios from "axios";

import PosterSlider from "../components/PosterSlider/posterslider.component";
import PremierImages from "../confiq/TempPoster.config";
//import PremierImages from "../confiq/TempPoster.config";

const  HomePage = () =>  {

    const [popularMovies, setPopularMovies ] =useState([]);
    useEffect(() => {
        const requestPopularMovies = async() => {
            const getPopularMovies = await axios.get("/movie/popular");
            console.log(getPopularMovies);
            setPopularMovies(getPopularMovies.data.results);
        }
        requestPopularMovies();
    },[]);
/// online streaming
    const [latestMovie , setLatestMovie] = useState([]);
    useEffect(() => {
        const requestLatestMovie = async() => {
            const getLatestMovie = await axios.get("/movie/top_rated");
            console.log(getLatestMovie);
            setLatestMovie(getLatestMovie.data.results);
        }
        requestLatestMovie();
    },[]);


    return (
        <>
       <div className="bg-gray-100">
       <div className="container mx-auto px-4 py-8 ">
            <h1 className="text-2xl font-bold text-gray-700 mx-2 py-2">The Best of Entertainment</h1>
        <EntertainmentCardSilder />
        </div>

       <div className="bg-navColor-200 p-4 ">
        <div className=" flex px-5 h-22  p-4">
            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="primier" className="w-full h-full px-4 mb-5" />
        </div>

        <div className="container mx-auto ">
            <PosterSlider images={popularMovies} title="Premiers" subtitle="Brand new releases every Friday" isDark />
        </div>
       </div>
       </div>

       <div className="bg-gray-100 p-5">
       <div className="container mx-auto p-4  ">
        <PosterSlider 
        images={latestMovie}
        title="Online Streaming Events"
        isDark ={false}
        />
       </div>
       </div>

        </>
    );
};
export default HomePage ;