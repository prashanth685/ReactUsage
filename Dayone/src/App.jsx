import React, { Suspense } from "react";
import Pagination from "./Components/Pagination";
import Users from "./Components/Users";
import Todos from "./Components/Todos";
import Query from "./Components/Query";
import Like from "./Components/Like";
import Todo from "./Components/Todo";
import Sidebar from "./Components/Sidebar";
import Table from "./Components/Table";
import Styled from "./Components/Styled";
import SearchBar from "./Components/SearchBar";
import Form from "./Components/Form";
import InputPlace from "./Components/InputPlace";
import Image from "./Components/Image";
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
      {/* <Sidebar /> */}
      {/* <Table /> */}
      {/* <Styled /> */}
      {/* <SearchBar /> */}
      {/* <Form /> */}
      {/* <InputPlace /> */}
      <Image />
    </>
  );
};

export default App;
