// File: src/pages/PokemonDetails.tsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPokemonDetailsByName } from "../services/services"; // Import the service function

function PokemonDetails() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPokemonDetails() {
      setLoading(true);
      try {
        const data = await fetchPokemonDetailsByName(name); // Call the service function
        setPokemon(data);
      } catch (err) {
        setError("Failed to load Pokémon details.");
      } finally {
        setLoading(false);
      }
    }
    fetchPokemonDetails();
  }, [name]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-2">
        {/* Home Link */}
        <Link to="/" className="text-blue-500 font-bold">
          Home
        </Link>

        {/* Separator */}
        <span className="text-gray-500">&gt;</span>

        {/* Pokémon Name Link */}
        <Link to={`/pokemon/${pokemon.name}`} className="text-blue-500">
          {pokemon.name}
        </Link>
      </div>
      {pokemon && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-4 bg-slate-100 rounded-xl">
          <div className="col-span-1">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-2 flex flex-col justify-center items-start pl-7 pb-7">
            <h1 className="text-3xl font-bold mb-4 capitalize">
              {pokemon.name}
            </h1>
            <div className="mb-2">
              <strong>Height:</strong> {pokemon.height}
            </div>
            <div className="mb-2">
              <strong>Weight:</strong> {pokemon.weight}
            </div>
            <div className="mb-2">
              <strong>Types:</strong>
              <ul className="list-disc ml-6 mt-2">
                {pokemon.types.map((t) => (
                  <li key={t.type.name} className="capitalize">
                    {t.type.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-2">
              <strong>Abilities:</strong>
              <ul className="list-disc ml-6 mt-2">
                {pokemon.abilities.map((ability) => (
                  <li key={ability.ability.name} className="capitalize">
                    {ability.ability.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonDetails;
