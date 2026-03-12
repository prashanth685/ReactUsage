import React, { useState } from "react";

const Table = () => {
  const [Toggle, setToggle] = useState(false);
  return (
    <>
      <div className="">
        <div className="flex flex-row min-w-3xs h-12 items-center justify-center gap-3 shadow-2xs m-1.5">
          <div className="">
            <input
              type="text"
              className="border-solid h-6 w-80 text-center 
              p-5"
              name=""
              id=""
              placeholder="enter project name"
            />
          </div>
          <div>
            <select name="" id="">
              <option value="DAQ4CH" className="w-60">
                DAQ4CH
              </option>
              <option value="DAQ6CH">DAQ6CH</option>
              <option value="DAQ10CH">DAQ10CH</option>
            </select>
          </div>
          <div>
            <button
              className="bg-green-400 p-2.5 rounded white"
              onClick={() => setToggle(!Toggle)}
            >
              Add model
            </button>
          </div>
        </div>
        {!Toggle && (
          <div className="flex items-center justify-center mt-7">
            <table border="1" className="table-fixed shadow-2xl">
              <tr>
                <td className="bg-amber-200">Sl No</td>
                <td className="bg-amber-200">Channel Name</td>
                <td className="bg-amber-200">Unit</td>
                <td className="bg-amber-200">Displacement</td>
              </tr>
              <tr>
                <td className="items-center">1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Table;
