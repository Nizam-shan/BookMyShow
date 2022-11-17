import React from "react";

// props src, title, subtitle, isDark(bool)

const Poster = (props) => {
    return (
        <>
        <div className=" flex flex-col px-2  gap-2 py-2  ">
            <div className="h-80 ">
                <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title
} className="rounded-md w-52 h-full" ></img>
            </div>

            <div>
                <h3 className={`text-lg font-bold ${
                    props.isDark ? "text-white" : "text-gray-700"
                }`}>{props.title}</h3>
                <p className={`text-sm  ${
                    props.isDark ? "text-white" : "text-gray-700"
                }`}>{props.overview
                }</p>
            </div>
        </div>
        </>
    );
};

export default Poster;