import React from "react";

const Tailwind = () => {
  return (
    <>
      <button
        className="bg-violet-500 hover:bg-violet-600 focus:outline-1 p-2.5 rounded mt-2 ml-2.5 text-white cursor-pointer r
      "
      >
        <span className="animate-spin motion-reduce:hidden"></span>
        Save Changes
      </button>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white even::bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-gray-950">
            <td>Jane Cooper</td>
            <td>Jane Cooper</td>
            <td>Jane Cooper</td>
          </tr>
          <tr className="odd:bg-white even::bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-gray-950 text-white">
            <td>Jane Cooper</td>
            <td>Jane Cooper</td>
            <td>Jane Cooper</td>
          </tr>
          <tr className="odd:bg-white even::bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-gray-950 text-white">
            <td>Jane Cooper</td>
            <td>Jane Cooper</td>
            <td>Jane Cooper</td>
          </tr>
          <tr className="odd:bg-white even::bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-gray-950 text-white">
            <td>Jane Cooper</td>
            <td>Jane Cooper</td>
            <td>Jane Cooper</td>
          </tr>
        </tbody>
      </table>
      <div>
        <p
          className="first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold 
        first-letter:text-gray-900
        first-line:uppercase
        first-line:tracking-widest mt-7"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          accusantium, eius suscipit molestias possimus consequuntur eum sit
          quod omnis quas autem mollitia natus minima dolores tempore dolorum
          sapiente aut. Consequatur?
        </p>
        <p className="mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, autem
          quas. Hic quasi quo necessitatibus eveniet accusantium, officia ipsa
          perferendis excepturi dolores quae cum vitae asperiores, accusamus
          veritatis est nihil.
        </p>
      </div>
    </>
  );
};

export default Tailwind;
