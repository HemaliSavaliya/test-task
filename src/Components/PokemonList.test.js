// File: src/components/PokemonList.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import PokemonList from "./PokemonList";

// Sample Pokémon data
const samplePokemon = [
    { name: "bulbasaur", types: ["grass", "poison"] },
    { name: "ivysaur", types: ["grass", "poison"] },
    { name: "venusaur", types: ["grass", "poison"] }
];

describe("PokemonList", () => {
    test("renders a list of Pokémon with their names and types", () => {
        render(<PokemonList pokemon={samplePokemon} />);

        // Check if Pokémon names are rendered
        expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
        expect(screen.getByText(/ivysaur/i)).toBeInTheDocument();
        expect(screen.getByText(/venusaur/i)).toBeInTheDocument();

        // Check if types are rendered
        expect(screen.getByText(/grass/i)).toBeInTheDocument();
        expect(screen.getByText(/poison/i)).toBeInTheDocument();
    });
});
