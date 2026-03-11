import React, { Suspense } from "react";
import Pagination from "./Components/Pagination";
import Users from "./Components/Users";
import Todos from "./Components/Todos";
import Query from "./Components/Query";
import Like from "./Components/Like";
import Todo from "./Components/Todo";
import Sidebar from "./Components/Sidebar";
// import Lazy from "./Components/Lazy";
// const Lazy = React.lazy(() => import("./Components/Lazy"));

const App = () => {
  return (
    <>
      {/* <h1>Learning React Lazy</h1>
      <Suspense>
        <Lazy />
      </Suspense> */}
      {/* <h1>Leaning Pagination</h1> */}
      {/* <Pagination /> */}
      {/* <Users /> */}
      {/* <Todos /> */}
      {/* <Query /> */}
      {/* <Like /> */}
      {/* <Todo /> */}
      <Sidebar />
    </>
  );
};

export default App;
