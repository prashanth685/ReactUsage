import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    if (search !== "") {
      fetch("https://dummyjson.com/quotes")
        .then((res) => res.json())
        .then((json) => setSearchData(json.quotes));
    }
  }, [search]);

  return (
    <section>
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div>
        {searchData.map((data) => (
          <div key={data.id} className="w-32 h-32 shadow p-2">
            <a href="#" target="_blank" rel="noreferrer">
              {data.quote}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchBar;
