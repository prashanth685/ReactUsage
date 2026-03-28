import React, { useEffect, useState } from "react";

export function Paginate() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div>
        {currentProducts.map((item) => (
          <div key={item.id} className="grid grid-cols-3">
            <p>{item.title}</p>
            <img
              src={item.thumbnail}
              alt={item.title}
              width="120"
              className=""
            />
          </div>
        ))}

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-3.5">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className="bg-blue-400 cursor-pointer p-3.5 rounded-2xl"
          >
            Prev
          </button>

          <span> Page {currentPage} </span>

          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={indexOfLastItem >= products.length}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
