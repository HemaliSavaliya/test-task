import React, { useState } from "react";

function SearchForm({ onSearch, onTypeFilter, types }) {
  const [query, setQuery] = useState("");

  const handleSearchChange = (event) => {
    setQuery(event.target.value); // Update local query state
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent form from reloading the page
    onSearch(query); // Trigger the search with the query
  };

  const handleTypeChange = (event) => {
    onTypeFilter(event.target.value);
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="mb-4 lg:flex gap-3 grid md:flex"
    >
      {/* Search Input */}
      <div className="flex w-full">
        <input
          type="text"
          placeholder="Search Pokémon by name..."
          className="border p-2 flex-grow focus:outline-none"
          value={query}
          onChange={handleSearchChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r"
        >
          Search
        </button>
      </div>

      {/* Type Filter */}
      <select
        className="border p-2 w-full"
        onChange={handleTypeChange}
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type.name} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default SearchForm;
