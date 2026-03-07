// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import "./pagination.css";
// const Pagination = () => {
//   const [tabledata, setTabledata] = useState();
//   const [currentPage, setCurrentPage] = useState(1);

//   const [rowsperPage, setRowsperPage] = useState(10);
//   const indexOfLastItem = currentPage * rowsperPage;
//   const indexofFirstItem = indexOfLastItem - rowsperPage;
//   const currentItems = tabledata?.users?.slice(
//     indexofFirstItem,
//     indexOfLastItem,
//   );
//   const totalpages = Math.ceil(tabledata?.total / rowsperPage);

//   useEffect(() => {
//     axios.get("https://dummyjson.com/users").then((res) => {
//       console.log(res.data);
//       setTabledata(res?.data);
//     });
//   }, []);

//   const handlePrevios = () => {
//     setCurrentPage((prev) => Math.max(prev - 1, 1));
//   };

//   const handlenext = () => {
//     setCurrentPage((prev) => Math.min(prev + 1, totalpages));
//   };

//   const handlePageClick = (pagenumber) => {
//     setCurrentPage(pagenumber);
//   };
//   return (
//     <>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Emaill</th>
//             <th>Age</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentItems?.map((value, index) => (
//             <tr key={index}>
//               <td>{value.firstName}</td>
//               <td>{value.lastName}</td>
//               <td>{value.age}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="pagination">
//         <button onClick={handlePrevios}>prev</button>
//         {Array.from({ length: totalpages }, (_, index) => (
//           <button onClick={() => handlePageClick(index + 1)}>
//             {index + 1}
//           </button>
//         ))}
//         <button onClick={handlenext}>next</button>
//       </div>
//     </>
//   );
// };

// export default Pagination;

import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import "./pagination.css";

const Pagination = () => {
  const [users, setusers] = useState([]);
  const [pagecount, setPagecount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const usersperpage = 10;

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => {
      setusers(res?.data?.users);
      setPagecount(Math.ceil(res.data.users.length / usersperpage));
    });
  }, []);

  const handlepageclick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * usersperpage;
  const currentUsers = users.slice(offset, offset + usersperpage);
  //   const pagecounts = Math.ceil(totalItems / itemsPerPage);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {currentUsers.map((value, index) => (
            <tr key={index}>
              <td>{value.firstName}</td>
              <td>{value.email}</td>
              <td>{value.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        previousLabel={" Prev"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pagecount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlepageclick}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        activeClassName={"active"}
      />
    </>
  );
};

export default Pagination;
