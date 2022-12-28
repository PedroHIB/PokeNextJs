import Image from "next/image";
import styles from "../../styles/Pokemon.module.scss";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const maxPokemmons = 905;
  const api = "https://pokeapi.co/api/v2/pokemon";

  const res = await fetch(`${api}/?limit=${maxPokemmons}`);
  const data = await res.json();

  //params
  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

export default function Pokemonid({ pokemon }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{pokemon.name}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
          {pokemon.types.map((element, index) => (
            <span
              key={index}
              className={`${styles.type} ${
                styles[("type_", element.type.name)]
              }`}
            >
              {element.type.name}
            </span>
          ))}
        </div>
        <div className={styles.data_container}>
          <div className={styles.data_height}>
            <h4>Altura:</h4>
            <p>{pokemon.height * 10} cm</p>
          </div>
          <div className={styles.data_weight}>
            <h4>Peso:</h4>
            <p>{pokemon.weight / 10} kg</p>
          </div>
        </div>
      </div>
    </div>
  );
}
