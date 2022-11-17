import React from "react";


const PosterCast = (props) => {
    return (
        <>
           
            <div className=" flex flex-col sm:w-1/2   ">
            <div className="h-36 w-36">
                <img src={props.src} alt={props.title} className="rounded-full w-full h-full" ></img>
            </div>

            <div className="py-3 ">
                <h3 className={`text-lg font-bold ${
                    props.isDark ? "text-white" : "text-gray-700"
                }`}>{props.title}</h3>
                <p className={`text-sm   ${
                    props.isDark ? "text-white" : "text-gray-700"
                }`}>{props.subtitle}</p>
            </div>
        </div>
            
        </>
    );
};

export default PosterCast;

