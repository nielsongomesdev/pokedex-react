import { useEffect, useState } from "react"
import axios from "axios";
import { CardContainer } from "./styles"

interface PokemonCardProps {
    pokemon: {
        name: string;
        url: string;
    }
}

export function PokemonCard({ pokemon }: PokemonCardProps) {

    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        axios.get(pokemon.url).then(response => {
            setImageUrl(response.data.sprites.front_default)
        })

    }, [pokemon.url])

   return (
    <CardContainer to={`/pokemon/${pokemon.name}`}>
      {imageUrl ? (
        <img src={imageUrl} alt={pokemon.name} />
      ) : (
        <p>Carregando...</p>
      )}
      <p>{pokemon.name}</p>
    </CardContainer>
  )}