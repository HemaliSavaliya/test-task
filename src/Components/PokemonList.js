import React, { useState } from "react";
import { Link } from "react-router-dom";

function PokemonList({ pokemon }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Number of Pokémon per page

  // Calculate total pages
  const totalPages = Math.ceil(pokemon.length / pageSize);

  // Get Pokémon for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const currentPokemon = pokemon.slice(startIndex, startIndex + pageSize);

  // Handle Previous Page
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  // Handle Next Page
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div>
      {/* No Records Found */}
      {currentPokemon.length === 0 ? (
        <div className="text-center text-gray-500 mt-4 font-semibold">
          No Pokémon found.
        </div>
      ) : (
        <>
          {/* Pokémon Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {currentPokemon.map((p, index) => (
              <div className="block border p-4" key={index}>
                {/* Pokémon Name */}
                <div className="capitalize font-bold mb-3">{p.name}</div>

                {/* Pokémon Types */}
                <div className="text-sm mb-3">
                  {(p.types || []).map((type, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded mr-1 mb-2"
                    >
                      {type}
                    </span>
                  ))}
                </div>

                {/* Details Link */}
                <Link to={`/pokemon/${p.name}`}>
                  <p className="text-sm font-semibold underline text-blue-700 hover:no-underline relative">
                    Details
                    <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </p>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-4 gap-2">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded ${currentPage === 1
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
              >
                Previous
              </button>
              <span className="text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded ${currentPage === totalPages
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default PokemonList;
