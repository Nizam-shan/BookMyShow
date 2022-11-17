import React from "react";
import { BiStar,BiChevronRight,BiShareAlt} from "react-icons/bi"


import launchRazorPay from "../Razorpay/razorPay.component";


const MovieHero = () => {
    return (
        <>
         {/* for small screens */}
        <div className="md:hidden" style={{height:"calc{180vw}"}} >
            <img  
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/kantara-kannada-et00330541-1667307802.jpg"
            alt="poster"
            />
        </div>
        {/* // for medium screens */}
        <div className="hidden md:block lg:hidden">
        <img  
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/kantara-kannada-et00330541-1667307802.jpg"
            alt="poster"
            />
        </div>
        {/* // for large screens */}
        <div className="hidden lg:block relative " style={{height:"30rem"}}>
            <div className="absolute h-full w-full " 
               style={{backgroundImage:" linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)"}}>
               </div>

              <div className="absolute z-30 w-64 h-96 top-10 left-24">
                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kantara-kannada-et00330541-1667307802.jpg" className="h-full w-full rounded-xl" alt="poster"></img>
               </div>

               <div className="left-1/3 absolute py-14 " >
                <div className="flex ">
                    <h1 className="text-white font-bold text-4xl">Kantara (kannada)</h1>
                    <div className="ml-96  w-28 opacity-25 h-12  bg-black rounded-md flex items-center p-1">
                    <BiShareAlt className="w-full h-full  text-white " />
                    <h1 className="text-white text-xl ">share</h1>
                    </div>
                </div>
                
                <div className="flex py-6">
                   <div className="flex space-x-4 items-center" >
                        <BiStar className="bg-red-500 w-12 h-10" />
                        <h1 className="flex text-2xl text-white font-bold ">9.5/10</h1>
                        <h1 className="flex text-xl text-white   ">130.5k rating <BiChevronRight className="mt-2 "/></h1>
                        
                   </div>
                </div>

                <div className="opacity-80   " style={{width:"30rem"}}>
                    <div className="bg-gray-900 h-20 p-5 rounded-lg flex justify-between  ">
                        <div className=" ">
                            <h6 className="text-white font-bold text-xl">Add your rating and review</h6>
                            <h6 className="text-white">Your ratings matter</h6>
                           
                        </div>
                        <button className=" rounded-md bg-white w-24 ">Rate Now</button>
                    </div>
                </div>

                <div className=" flex  p-2  space-x-6 py-6 ">
               <div className="bg-gray-300 w-8 h-8 rounded-sm">
                    <a className=" p-1 " href="">2D</a> 
                </div>
                <div className="flex h-8  w-20 bg-gray-300 rounded-sm ">
                    <a className="  w-full h-full  p-1" href="">kannada</a> 
                </div>
               </div>
               <div className="flex text-white space-x-4">
                        <h1 className=" text-lg"> 2hrs 30m </h1>
                        <span className="font-bold "> . </span>
                        <a href="#" className=" text-lg">Adventure</a>
                        <span className="font-bold "> , </span>
                        <a href="#" className=" text-lg">Drama</a>
                        <span className="font-bold "> , </span>
                        <a href="#"className=" text-lg">Thriller</a>
                        <span className="font-bold "> . </span>
                        <a href="#" className=" text-lg">UA</a>
                        <span className="font-bold "> . </span>
                        <a href="#" className=" text-lg">30 Sep 2022</a>
                    </div>
 
                    <div className="mt-5">
                        <div className="flex py-2 ">
                            <button onClick={launchRazorPay} className=" w-48 text-white h-12 bg-red-500 rounded-lg text-lg ">Book ticket</button>
                        </div>
                    </div>
                   
                   
               </div>
              
               
             
              
              
        <img  
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/kantara-kannada-et00330541-1667307802.jpg"
            alt="poster"
            className="w-full h-full "
            />
        </div>
        </>
    );
};

export default MovieHero;