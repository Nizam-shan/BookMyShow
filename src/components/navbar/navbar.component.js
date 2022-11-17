import { BiChevronRight,BiChevronDown,BiMenu, BiSearch } from "react-icons/bi";
import React from "react";


// for small screen
const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between ">
        <div>
          <h3 className="text-xl"><b>ALL START'S HERE!</b></h3>
          <span className="text-gray-400 text-xs flex items-center p-1">
            AMMATHI <BiChevronRight />
          </span>
        </div>
        <div className="w-8 h-8">

          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  )
};
// for medium screen
const NavMm = () => {
  return (
    <>
      <div className="w-full   flex items-center bg-white gap-3 py-2 px-2 rounded-sm ">
        <BiSearch />
        <input type="search" className="w-full  focus:outline-none" placeholder="Search for movies , events, plays, sports and activity"></input>
      </div>

    </>

  )
};
// for large screen
const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4 w-1/2 ">
          <div className="w-32 ">
            <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="logo" className="w-full h-full"></img>
          </div>
          <div className="w-full  flex items-center bg-white gap-3 py-1 px-2 rounded-md ">
            <BiSearch />
            <input type="search" className="w-full  focus:outline-none" placeholder="Search for movies , events, plays, sports and activity"></input>
          </div>
        </div>

        <div className="flex items-center gap-3">
        <span className="text-grey-400 text-xs text-gray-400 flex items-center p-1 hover:text-white cursor-pointer">
            AMMATHI <BiChevronDown />
          </span>
          <button className="bg-red-500 text-white text-sm rounded px-2 py-1">Sign up</button>
          <div className="w-8 h-8 text-white">
            < BiMenu className="w-full h-full" />
          </div>
        </div>
       
      </div>

    </>
  )
};
// main parent component
// providing if else condition and rendering the page according bellow is the parent component.
const Navbar = () => {
  return (
    <>
      <nav className="bg-navColor-700 p-4 ">
        <div className="md:hidden"> { //md:hidden medium or higher screen this will be not shown
          // for mobile screen
          <NavSm />
        }</div>
        <div className=" hidden lg:hidden md:flex"> { //md:hidden medium or higher screen this will be not shown
          // for medium screen
          <NavMm />
        }</div>
        <div className="hidden lg:flex"> { //md:hidden medium or higher screen this will be not shown
          // for large screen
          <NavLg />
        }</div>
      </nav>
    </>
  )
};

export default Navbar;
