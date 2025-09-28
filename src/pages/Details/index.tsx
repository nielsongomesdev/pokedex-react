import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import * as S from "./styles"

interface PokemonDetails {
  name: string;
  sprites: {
    front_default: string;
  };
  abilities: {
    ability: {
      name: string;
    };
  }[];
  moves: {
    move: {
      name: string;
    };
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
}

export function Details() {
  const { name } = useParams()
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(null)

  useEffect(() => {
    if (!name) {
      return
    }

    async function fetchDetails() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        setPokemonDetails(response.data)
      } catch (error) {
        console.error("Erro ao buscar detalhes do pokémon:", error)
      }
    }

    fetchDetails()
  }, [name])

  if (!pokemonDetails) {
    return <h1>Carregando detalhes...</h1>
  }

   return (
    <S.DetailsContainer>
      <S.BackLink to="/">Voltar para a Pokédex</S.BackLink>

      <S.PokemonInfoCard>
        <S.MainInfo>
          <h1>{pokemonDetails.name}</h1>
          <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
        </S.MainInfo>

        <S.InfoSection>
          <h2>Tipos</h2>
          <ul>
            {pokemonDetails.types.map(item => (
              <li key={item.type.name}>{item.type.name}</li>
            ))}
          </ul>
        </S.InfoSection>

        <S.InfoSection>
          <h2>Habilidades</h2>
          <ul>
            {pokemonDetails.abilities.map(item => (
              <li key={item.ability.name}>{item.ability.name}</li>
            ))}
          </ul>
        </S.InfoSection>

        <S.InfoSection>
          <h2>Movimentos</h2>
          <S.MovesList>
            {pokemonDetails.moves.map(item => (
              <li key={item.move.name}>{item.move.name}</li>
            ))}
          </S.MovesList>
        </S.InfoSection>

      </S.PokemonInfoCard>
    </S.DetailsContainer>
  );
}
