// File: src/pages/Home.tsx
import React, { useState, useEffect } from "react";
import SearchForm from "../Components/SearchForm";
import PokemonList from "../Components/PokemonList";
import {
  fetchPokemonList,
  fetchPokemonDetails,
  fetchPokemonTypes,
  fetchPokemonByType,
} from "../services/services";

function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const pokemonList = await fetchPokemonList();

        // Fetch details for each Pokémon to get types
        const detailedPokemon = await Promise.all(
          pokemonList.map(fetchPokemonDetails)
        );

        setPokemon(detailedPokemon);
        setFilteredPokemon(detailedPokemon);

        const typeList = await fetchPokemonTypes();
        setTypes(typeList);
      } catch (err) {
        setError("Failed to load Pokémon or types.");
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleSearch = (query) => {
    const lowerQuery = query.toLowerCase();
    setFilteredPokemon(
      pokemon.filter(
        (p) =>
          p.name.toLowerCase().includes(lowerQuery) || // Match name
          p.types.some((type) => type.toLowerCase().includes(lowerQuery)) // Match type
      )
    );
  };

  const handleTypeFilter = async (type) => {
    if (!type) {
      setFilteredPokemon(pokemon); // Reset to the original list
      return;
    }

    setLoading(true);
    try {
      const filtered = await fetchPokemonByType(type);
      setFilteredPokemon(filtered);
    } catch (err) {
      setError("Failed to filter by type.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <SearchForm
        onSearch={handleSearch}
        onTypeFilter={handleTypeFilter}
        types={types}
      />
      <PokemonList pokemon={filteredPokemon} />
    </div>
  );
}

export default Home;
