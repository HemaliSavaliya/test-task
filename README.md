# Pokémon App

A React application that fetches Pokémon data from the Pokémon API and displays it with features like search, filtering, and pagination.

## Instructions to Run the Project Locally

To run the project locally, follow these steps:

1. **Clone the Repository**:
   If you haven't already cloned the repository, do so by running the following command:
   ```bash
   git clone https://github.com/yourusername/yourprojectname.git
   ```

### 2. **A Short Description of Your Approach in the README.md**

This section provides a brief explanation of your approach to building the application and how the code is structured.

```markdown
## Project Approach

This project is a simple React application that fetches data from the [Pokémon API](https://pokeapi.co/) and displays a list of Pokémon. It includes features such as search functionality, type filtering, and pagination.

### Features:

- **Search**: Users can search for Pokémon by name or type.
- **Pagination**: Displays the Pokémon list with pagination, allowing users to navigate through different pages of results.
- **Type Filtering**: Users can filter the Pokémon by type (e.g., Grass, Fire, Water).
- **Details Page**: Users can click on a Pokémon to view more details, including its height, weight, types, and abilities.

### Approach:

1. **API Integration**:
   - Data is fetched from the [Pokémon API](https://pokeapi.co/). The initial Pokémon list is fetched with a limit of 151, and additional details (like types) are fetched for each Pokémon.
2. **Component Structure**:

   - The project follows a component-based structure with reusable components such as `PokemonList`, `SearchForm`, and `PokemonDetails`.
   - `PokemonList` renders the list of Pokémon, `SearchForm` handles search input and type filtering, and `PokemonDetails` shows detailed information about a selected Pokémon.

3. **Routing**:

   - React Router is used for navigation between the Pokémon list and the individual Pokémon detail pages.

4. **State Management**:

   - The project uses React's `useState` and `useEffect` hooks for state management and side effects (e.g., fetching data).

5. **Testing**:
   - The project uses Jest and React Testing Library to test key components such as rendering the Pokémon list and navigating to the details page.

### Tech Stack:

- **Frontend**: React.js, React Router
- **Styling**: Tailwind CSS
- **Testing**: Jest, React Testing Library
- **API**: Pokémon API (https://pokeapi.co/)
```
