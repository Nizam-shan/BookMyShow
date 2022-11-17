import React from "react";
import MovieHero from "../components/ṃovieHero/MovieHero.component";
import { BiMovie } from "react-icons/bi"
import PosterCast from "../components/poster/movieCast.component";



const MoviePage = () => {
   return (
      <>
         <MovieHero />
         <div className="my-12 container lg:w-3/4 lg:ml-32">
            <div className="flex flex-col items-start gap-3">
               <h2 className="text-2xl text-gray-800 font-bold">About The Movie</h2>
               <p>Set in a fictional village of Dakshina Kannada, Kantara is a visual grandeur that brings alive the traditional culture of Kambla and Bhootha Kola. It is believed that Demigods are the guardians and their energies encircle the village. In the story, there is a ripple when a battle of ego swirls along tradition and culture of the land. The soul of the story is on human and nature conflict in which Shiva is the rebellion and works against nature. There are intense conflicts he indulges in. In the end, a much awaiting loop leads to war between the villagers and the evil forces. Will Shiva, the protagonist of the film be able to reinstate peace and harmony in the village perceiving his existence?</p>
            </div>
            <div className="my-8">
               <hr></hr>
            </div>

            
            <div className="md:px-40 lg:px-0">
               <h1 className="font-bold text-2xl mb-3">Applicable Offers</h1>

               <div className="flex items-start gap-2 bg-yellow-200 border-yellow-400 border-2 border-dashed rounded-md p-3 w-96">
                  <div className="w-6 h-8">
                     <BiMovie className="w-full h-full" />
                  </div>
                  <div className="flex flex-col items-start">
                     <h3 className="text-gray-800 text-lg">Stream online movie for <span>FREE!.</span></h3>
                     <p className="text-gray-600">Limited Offers..</p>
                  </div>
               </div>
            </div>
            
         </div>


         <div >
            <div className="lg:px-36">
               <hr></hr>
            </div>
            <div className="lg:px-32 p-5">
               <h1 className="text-2xl font-bold md:text-4xl">Cast</h1>
            </div>
           
           <div className="flex  lg:ml-20  flex-wrap ">
           <div className="p-5">
               <PosterCast className=""
                  src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/angela-bassett-170-24-03-2017-12-37-11.jpg"
                  title="Nizam Shan"
                  subtitle="actor"
               />

            </div>
            <div className="p-5">
               <PosterCast className=""
                  src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/angela-bassett-170-24-03-2017-12-37-11.jpg"
                  title="Nizam Shan"
                  subtitle="actor"
               />

            </div>
            <div className="p-5">
               <PosterCast className=""
                  src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/angela-bassett-170-24-03-2017-12-37-11.jpg"
                  title="Nizam Shan"
                  subtitle="actor"
               />

            </div>
            <div className="p-5">
               <PosterCast className=""
                  src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/angela-bassett-170-24-03-2017-12-37-11.jpg"
                  title="Nizam Shan"
                  subtitle="actor"
               />

            </div>
           </div>

         </div>

      </>
   )
};

export default MoviePage;



/*  in this the book my show have separate movie render for large, medium,and small screens so
    created a separate component called  movie hero and in that movie hero.js file created code 
    and that will be rendering here */
