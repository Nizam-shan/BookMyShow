import React from "react";
import Poster from "../components/poster/poster.component";
import PlaysFilter from "../components/playsfilters/playsFilters.component";

const Plays = () => {
    return (
        <>
            <div className=" bg-gray-100 mx-auto px-4 ">
                {/* right */}
               <div className="w-full  lg:flex lg:flex-row-reverse">
                <div className="lg:w-8/12">
                <h1 className="text-2xl font-bold mb-4">Plays in Ammathi</h1>
               
               <div className="flex flex-wrap">
                <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOSBOb3Ygb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00342398-qpnrcxuqsd-portrait.jpg"
                    title ="Peppa Pig Live !- Ammathi"
                    subtitle="English ₹650. "
                    />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                   <Poster
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOSBOb3Ygb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00342398-qpnrcxuqsd-portrait.jpg"
                    title ="Peppa Pig Live !- Ammathi"
                    subtitle="English ₹650. "
                    />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                   <Poster
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOSBOb3Ygb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00342398-qpnrcxuqsd-portrait.jpg"
                    title ="Peppa Pig Live !- Ammathi"
                    subtitle="English ₹650. "
                    />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOSBOb3Ygb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00342398-qpnrcxuqsd-portrait.jpg"
                    title ="Peppa Pig Live !- Ammathi"
                    subtitle="English ₹650. "
                    />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOSBOb3Ygb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00342398-qpnrcxuqsd-portrait.jpg"
                    title ="Peppa Pig Live !- Ammathi"
                    subtitle="English ₹650. "
                    />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOSBOb3Ygb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00342398-qpnrcxuqsd-portrait.jpg"
                    title ="Peppa Pig Live !- Ammathi"
                    subtitle="English ₹650. "
                    />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOSBOb3Ygb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00342398-qpnrcxuqsd-portrait.jpg"
                    title ="Peppa Pig Live !- Ammathi"
                    subtitle="English ₹650. "
                    />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOSBOb3Ygb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00342398-qpnrcxuqsd-portrait.jpg"
                    title ="Peppa Pig Live !- Ammathi"
                    subtitle="English ₹650. "
                    />
                    </div>
                </div>
               </div>
               <div className="lg:w-1/4  ">
               <h1 className="text-2xl font-bold mb-4 ">Filters</h1>
               <div className="p-5">
               <div className="bg-white p-3">
               <PlaysFilter
               title="Date"
               tags={["Today" ,"Tomorrow","This weekend"]}
               />
               </div>
              </div>
              <div className="p-5">
              <div className="bg-white p-3">
               <PlaysFilter
               title="Language"
               tags={["Kannada" ,"Malayalam","English"]}
               />
               </div>
              </div>
              <div className="p-5">
               <div className="bg-white p-3">
               <PlaysFilter
               title="Category"
               tags={["Thriller" ,"Action","Entertainment"]}
               />
               </div>
               </div>
               <div className="p-5">
               <div className="bg-white p-3">
               <PlaysFilter
               title="Genres"
               tags={["Drama" ,"Comedy","Musical"]}
               />
               </div>
               </div>
               <div className="p-5">
               <div className="bg-white p-3">
               <PlaysFilter
               title="More Filter"
               tags={["Outdoor Event" ,"Kids Allowed","Online Streaming"]}
               />
               </div>
               </div>
               <div className="p-5">
               <div className="bg-white p-3">
               <PlaysFilter
               title="Price"
               tags={["Free" ,"Above-2000","501-999"]}
               />
               </div>
               </div>
               <div className="p-2 rounded-md border-2 border-red-300 ">
                <h1 className="px-20 text-red-500 ">Browse my show</h1>
                </div>
               </div>
              
               </div>
            </div>

        </>
    );
};

export default Plays;