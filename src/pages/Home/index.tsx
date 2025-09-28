import { useTheme } from "../../contexts/ThemeContext"
import axios from "axios"
import { useState, useEffect } from "react"
import { PokemonCard } from "../../components/PokemonCard"
import * as S from "./styles"
interface Pokemon {
  name: string;
  url: string;
}

interface PokemonType {
  name: string;
  url: string;
}

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const [types, setTypes] = useState<PokemonType[]>([]);
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    if (!selectedType) {
      async function fetchPokemons() {
        try {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`
          );
          setPokemons((prevPokemons) => {
            const newPokemons = response.data.results;
            const existingUrls = prevPokemons.map(p => p.url);
            const filteredNew = newPokemons.filter((p: Pokemon) => !existingUrls.includes(p.url));
            return [...prevPokemons, ...filteredNew];
          });
        } catch (error) {
          console.error("Erro ao buscar pokémons:", error);
        }
      }
      fetchPokemons();
    }
  }, [offset, selectedType]);

  useEffect(() => {
    async function fetchTypes() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/type');
        setTypes(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar tipos:", error);
      }
    }
    fetchTypes();
  }, []);

  useEffect(() => {
    if (selectedType) {
      async function fetchPokemonsByType() {
        try {
          setPokemons([]); 
          const response = await axios.get(`https://pokeapi.co/api/v2/type/${selectedType}`);
          const pokemonsData = response.data.pokemon.map((p: {pokemon: Pokemon}) => p.pokemon);
          setPokemons(pokemonsData);
        } catch (error) {
          console.error("Erro ao buscar pokémons por tipo:", error);
        }
      }
      fetchPokemonsByType();
    }
  }, [selectedType]);

  function handleTypeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedType(event.target.value);
    setPokemons([]);
    setOffset(0);
  }

  function handleLoadMore() {
    setOffset((prevOffset) => prevOffset + 10);
  }

  return (
    <S.HomeContainer>
      <S.Header>
        <h1>Pokédex</h1>
        <div>
          <S.FilterSelect value={selectedType} onChange={handleTypeChange}>
            <option value="">Todos os Tipos</option>
            {types.map(type => (
              <option key={type.name} value={type.name}>
                {type.name}
              </option>
            ))}
          </S.FilterSelect>
          <S.ThemeButton onClick={toggleTheme} style={{ marginLeft: '1rem' }}>
            {theme === "light" ? "🌙 Tema Escuro" : "☀️ Tema Claro"}
          </S.ThemeButton>
        </div>
      </S.Header>

      <S.PokemonList>
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={`${pokemon.url}-${index}`} pokemon={pokemon} />
        ))}
      </S.PokemonList>
      
      {selectedType === '' && (
        <S.LoadMoreButton onClick={handleLoadMore}>
          Carregar Mais
        </S.LoadMoreButton>
      )}
    </S.HomeContainer>
  );
}
