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
        <h2 key={pokemon.id}>{pokemon.name}</h2>
      </div>
    </div>
  );
}
