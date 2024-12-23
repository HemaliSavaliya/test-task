// File: src/services/apiService.js

export const fetchPokemonList = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch Pokémon list.");
    }

    const data = await response.json();
    return data.results;
};

export const fetchPokemonDetails = async (pokemon) => {
    const response = await fetch(pokemon.url);

    if (!response.ok) {
        throw new Error(`Failed to fetch details for ${pokemon.name}`);
    }

    const data = await response.json();
    return {
        name: pokemon.name,
        types: data.types.map((t) => t.type.name), // Extract type names
    };
};

export const fetchPokemonTypes = async () => {
    const url = "https://pokeapi.co/api/v2/type";
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch Pokémon types.");
    }

    const data = await response.json();
    return data.results;
};

export const fetchPokemonByType = async (type) => {
    const url = `https://pokeapi.co/api/v2/type/${type}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to fetch Pokémon for type: ${type}`);
    }

    const data = await response.json();
    return data.pokemon.map((p) => ({
        name: p.pokemon.name,
        types: [type], // Include the selected type
    }));
};

export const fetchPokemonDetailsByName = async (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to fetch details for ${name}`);
    }

    const data = await response.json();
    return data;
};
