import { Disclosure } from "@headlessui/react";
import React from "react";
import { BiChevronDown,BiChevronUp } from "react-icons/bi"

const PlaysFilter= (props) => {
    return (
      <Disclosure>
        {({ open })=>(
           <>
             <Disclosure.Button className="py-2 flex items-center gap-2 flex-wrap">
                {open ? <BiChevronUp /> : <BiChevronDown />}
             <span className={open ? 'text-red-600' : 'text-black'}>
                {props.title}
             </span>
           </Disclosure.Button>
           <Disclosure.Panel className="text-gray-500">
           <div className="flex item-center gap-3">
            {props.tags.map((tag) => (
                    <>
                    <div className="border-2 border-gray-400 p-1">
                        <span className="text-red-600">{tag}</span>
                    </div>
                    </>
                ))
            }
           </div>
           </Disclosure.Panel>
           </>
        )}
       
      </Disclosure>
    );
  };

  export default PlaysFilter;
  