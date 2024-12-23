// File: src/components/PokemonListNavigation.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // For routing
import PokemonList from "./PokemonList";

// Sample Pokémon data
const samplePokemon = [
    { name: "bulbasaur", types: ["grass", "poison"] }
];

describe("PokemonList", () => {
    test("navigates to Pokémon details page when a Pokémon name is clicked", () => {
        render(
            <MemoryRouter>
                <PokemonList pokemon={samplePokemon} />
            </MemoryRouter>
        );

        // Find Pokémon name link element
        const linkElement = screen.getByText(/bulbasaur/i);

        // Simulate click event
        fireEvent.click(linkElement);

        // Check if the URL has changed to the details page
        expect(window.location.pathname).toBe("/pokemon/bulbasaur");
    });
});
