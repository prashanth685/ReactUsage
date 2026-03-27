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

// import React, { useState } from "react";
// import { FaAngleDown } from "react-icons/fa";

// export default function Navbar() {
//   const [model, setmodel] = useState(false);
//   return (
//     <>
//       <div className="flex justify-baseline items-center shadow-md min-h-10 w-2xs">
//         <h2 className=" font-bold">Display</h2>
//         <span>
//           <FaAngleDown
//             onClick={() => setmodel(!model)}
//             // className={`${!model} ? rotate-180 transition-all ease-in : rotate-360 transition-all ease-in`}
//             className={`transition-all ease-in cursor-pointer ${
//               model ? "rotate-0" : "rotate-180"
//             }`}
//           />
//         </span>
//       </div>
//       {!model && (
//         <div className="w-2xl shadow-2xl">
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
//           temporibus fuga non iste quis, exercitationem tempore quas ad deserunt
//           quasi sint at quisquam ea ex. Numquam reprehenderit necessitatibus
//           suscipit esse.
//         </div>
//       )}
//       <div
//         className="flex items-center justify-center mt-6 shadow-md
//       "
//       >
//         <img
//           src="https://images.unsplash.com/photo-1774248056192-7273c2a770d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D"
//           alt=""
//           // className="w-52 h-52 hover:scale-110 transform transition duration-300 cursor-pointer"
//           className="w-52 h-52 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
//         />
//       </div>
//     </>
//   );
// }

// import { useState } from "react";

// export default function Navbar() {
//   const [position, setPosition] = useState({ x: 50, y: 50 });

//   const handleMove = (e) => {
//     const { left, top, width, height } = e.target.getBoundingClientRect();

//     const x = ((e.clientX - left) / width) * 100;
//     const y = ((e.clientY - top) / height) * 100;

//     setPosition({ x, y });
//   };

//   return (
//     <div className="flex items-center justify-center mt-6">
//       <div className="w-52 h-52 overflow-hidden rounded-lg cursor-zoom-in">
//         <img
//           src="https://images.unsplash.com/photo-1774248056192-7273c2a770d1?w=600&auto=format&fit=crop&q=60"
//           alt=""
//           onMouseMove={handleMove}
//           className="w-full h-full object-cover transition-transform duration-200 ease-out hover:scale-150"
//           style={{
//             transformOrigin: `${position.x}% ${position.y}%`,
//           }}
//         />
//       </div>
//     </div>
//   );
// }

import { useRef, useState } from "react";

export default function Navbar() {
  const boxRef = useRef();

  const [pos, setPos] = useState({ x: 0, y: 0 });

  const velocity = useRef({ x: 0, y: 0 });
  const last = useRef({ x: 0, y: 0, time: 0 });
  const dragging = useRef(false);

  // 🖱️ Start dragging
  const handleMouseDown = (e) => {
    dragging.current = true;

    last.current = {
      x: e.clientX,
      y: e.clientY,
      time: Date.now(),
    };
  };

  // 🖱️ While dragging
  const handleMouseMove = (e) => {
    if (!dragging.current) return;

    const now = Date.now();
    const dx = e.clientX - last.current.x;
    const dy = e.clientY - last.current.y;
    const dt = now - last.current.time;

    // velocity = distance / time
    velocity.current = {
      x: dx / dt,
      y: dy / dt,
    };

    setPos((prev) => ({
      x: prev.x + dx,
      y: prev.y + dy,
    }));

    last.current = {
      x: e.clientX,
      y: e.clientY,
      time: now,
    };
  };

  // 🖱️ Release → start inertia
  const handleMouseUp = () => {
    dragging.current = false;

    const friction = 0.95;

    const animate = () => {
      velocity.current.x *= friction;
      velocity.current.y *= friction;

      setPos((prev) => ({
        x: prev.x + velocity.current.x * 16,
        y: prev.y + velocity.current.y * 16,
      }));

      // stop when slow
      if (
        Math.abs(velocity.current.x) > 0.01 ||
        Math.abs(velocity.current.y) > 0.01
      ) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div
      className="h-screen flex items-center justify-center bg-gray-100"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        ref={boxRef}
        onMouseDown={handleMouseDown}
        className="w-24 h-24 bg-blue-500 rounded-lg cursor-grab active:cursor-grabbing"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
        }}
      />
    </div>
  );
}
