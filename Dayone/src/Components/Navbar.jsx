// import React from "react";
// import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
//       <header className="w-full ">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
//           <div className="flex items-center gap-2">
//             <img
//               src="https://images.unsplash.com/photo-1601158935942-52255782d322?w=600&auto=format&fit=crop&q=60"
//               alt="logo"
//               className="w-10 h-10 rounded-full"
//             />
//             <span className="text-lg font-semibold">Router</span>
//           </div>

//           <nav>
//             <ul className="flex items-center gap-8 bg-white px-6 py-2 shadow-lg rounded-full">
//               <NavLink to="/home" className="font-semibold">
//                 Home
//               </NavLink>
//               <NavLink to="/about">Home</NavLink>
//               <NavLink to="/services">Home</NavLink>
//               <NavLink to="/contact">Home</NavLink>
//             </ul>
//           </nav>

//           <div>
//             <button className="">Get Started</button>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";

export const Navbar = () => {
  const [ismodel, setismodel] = useState(false);
  return (
    <>
      <div className="ml-40 relative">
        <input
          type="text"
          placeholder="Enter Your email"
          className="w-60 rounded-2xl shadow-md p-2.5 placeholder:text-gray-500 placeholder:ml-2.5"
        />
        <button
          className="bg-violet-500 text-white p-2 ml-3 rounded-2xl w-60 mt-3 cursor-pointer"
          onClick={() => setismodel(!ismodel)}
        >
          Join us
        </button>
        {!ismodel && (
          <div className="min-w-2xl shadow-md rounded-4xl h-36 absolute flex items-center justify-center mt-2.5">
            <div>
              <h2>Are you sure want to close?</h2>
            </div>
            <button
              className="p-2.5 cursor-pointer bg-green-400  rounded-2xl "
              onClick={() => alert("ok clicked")}
            >
              ok
            </button>
            <button
              className="p-2.5 bg-red-400 rounded-2xl cursor-pointer"
              onClick={() => setismodel(!ismodel)}
            >
              cancel
            </button>
          </div>
        )}
      </div>
    </>
  );
};
