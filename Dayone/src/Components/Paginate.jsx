// import React, { useEffect, useState } from "react";

// export function Paginate() {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;
//   const [loading, setLoading] = useState(false);

//   const getData = async () => {
//     const res = await fetch("https://dummyjson.com/products");
//     const data = await res.json();
//     if (data && data.products) {
//       setProducts(data.products);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   // Pagination logic
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

//   return (
//     <>
//       <div>
//         {currentProducts.map((item) => (
//           <div key={item.id} className="grid grid-cols-3">
//             <p>{item.title}</p>
//             <img
//               src={item.thumbnail}
//               alt={item.title}
//               width="120"
//               className=""
//             />
//           </div>
//         ))}

//         {/* Pagination Controls */}
//         <div className="flex items-center justify-center gap-3.5">
//           <button
//             onClick={() => setCurrentPage((prev) => prev - 1)}
//             disabled={currentPage === 1}
//             className="bg-blue-400 cursor-pointer p-3.5 rounded-2xl"
//           >
//             Prev
//           </button>

//           <span> Page {currentPage} </span>

//           <button
//             onClick={() => setCurrentPage((prev) => prev + 1)}
//             disabled={indexOfLastItem >= products.length}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";

const Paginate = () => {
  return (
    <>
      <header className="w-full sticky top-0 ">
        <nav className="shadow-md bg-red-200">
          <ul className="list-none flex justify-center gap-6 p-4">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque
        perspiciatis eum beatae, voluptate optio quasi maiores officia sunt,
        ipsa doloremque nostrum, excepturi consectetur id praesentium nihil.
        Nesciunt, sapiente nulla ipsa nisi consequatur veritatis accusantium
        incidunt, similique mollitia velit eos sed pariatur commodi repellat
        sint facilis tenetur perferendis maiores accusamus. Voluptatibus earum
        officia quia quo hic, ratione eligendi quas asperiores temporibus
        repellendus autem labore. Ut assumenda possimus ipsum. Repellat
        assumenda perspiciatis labore voluptates odio eligendi mollitia ut,
        excepturi enim tempore aut doloremque facere eveniet, in perferendis
        sapiente aliquam molestias? Voluptate soluta quo dolor placeat itaque.
        Quidem iure minus porro molestias. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Consequuntur, expedita. Dignissimos,
        repellendus numquam! Aspernatur deleniti modi dicta cum eius soluta, hic
        dolor. Veritatis libero maxime perspiciatis alias qui. Blanditiis maxime
        dolorum quasi, commodi fugit officia facilis aliquid tempore ut
        veritatis beatae, illum soluta aspernatur adipisci alias nulla fugiat ex
        ullam non et ducimus. Vel placeat quam assumenda voluptatibus
        repellendus aut ullam! Est delectus sit voluptates. Explicabo cum libero
        rem inventore facere, eius ipsa delectus nisi hic veritatis ratione id
        vero incidunt praesentium animi cupiditate sint consectetur iste
        molestiae ut magnam saepe odit reprehenderit quos! Illo, perspiciatis
        corrupti vero ex nisi, quaerat quod nostrum unde, quidem minima laborum
        accusamus architecto magnam magni assumenda possimus porro. Laboriosam
        magnam libero eaque culpa cupiditate autem ipsam illum molestiae rerum
        ipsa nemo repudiandae odit accusamus excepturi natus consequuntur
        perferendis optio eos tempore reiciendis, voluptatem quasi possimus
        provident minus? Minus ducimus fugit consequatur saepe tenetur quod
        rerum vel dignissimos in maxime. Odio eius cum odit, praesentium animi
        dolor soluta voluptatem perspiciatis sit dolore. Quos voluptatem quam
        quo nihil placeat perferendis explicabo libero, illum, error asperiores
        deserunt consequatur autem omnis, corrupti eaque voluptates consequuntur
        blanditiis debitis ullam officiis rerum quisquam perspiciatis earum sit!
        Excepturi deleniti eos, id maxime veniam laborum soluta! Assumenda nam
        totam id rerum deserunt! Voluptatum, deserunt. Dolorem quisquam alias,
        excepturi maiores dicta consequatur neque optio sequi placeat vitae,
        aliquam ipsa illum nostrum! Voluptatum enim consequatur minus fugit
        accusamus, quod nemo deserunt voluptate soluta at inventore eos
        incidunt, omnis officia qui! Quidem corrupti, deserunt doloremque itaque
        amet fugiat est, maxime autem optio provident maiores, incidunt iste?
        Quis sapiente ut quibusdam fuga alias modi magnam similique quia eveniet
        cupiditate. Sint voluptates delectus aliquam tempora iure, in quibusdam
        natus voluptatibus doloremque! Aliquam rem officia temporibus error
        cumque laborum dicta dolorum libero labore saepe nam, debitis adipisci,
        repudiandae inventore culpa possimus sed quisquam beatae nostrum totam
        iusto perspiciatis maxime magni nesciunt. Facilis, expedita. Laborum
        repudiandae blanditiis porro praesentium beatae odit quam vel id dolorem
        distinctio? Error quod at totam adipisci, laboriosam perferendis
        officiis, quam laudantium, ipsam hic odio quae doloribus voluptas?
        Perferendis, illum assumenda sit, veniam quisquam asperiores praesentium
        repudiandae magnam ex sint corporis eaque qui atque nobis! Voluptatem,
        assumenda. Beatae possimus aperiam assumenda repellendus velit, ex hic
        temporibus in. Asperiores doloribus doloremque rerum soluta minus? Illo
        modi necessitatibus, temporibus vitae iure, accusamus aperiam error
        ullam repellat ex sunt, quaerat veritatis?
      </div>
    </>
  );
};

export default Paginate;
