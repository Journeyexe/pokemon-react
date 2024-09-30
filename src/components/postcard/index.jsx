import "./styles.css";

export default function PostCard({ pokemon }) {
  return (
    <div className="post">
      <img
        src={
          pokemon.sprites.versions["generation-v"]["black-white"].animated
            .front_default
        }
        alt={pokemon.name}
      />
      <div className="content">
        <h2 key={pokemon.id}>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1)}
        </h2>
        <p>
          {pokemon.types[0].type.name}
          {pokemon.types[1] && ` / ${pokemon.types[1].type.name}`}
        </p>
      </div>
    </div>
  );
}
