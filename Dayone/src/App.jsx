import React, { Suspense } from "react";
import Pagination from "./Components/Pagination";
// import Lazy from "./Components/Lazy";
// const Lazy = React.lazy(() => import("./Components/Lazy"));

const App = () => {
  return (
    <>
      {/* <h1>Learning React Lazy</h1>
      <Suspense>
        <Lazy />
      </Suspense> */}
      <h1>Leaning Pagination</h1>
      <Pagination />
    </>
  );
};

export default App;
