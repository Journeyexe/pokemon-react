import PostCard from "../postcard";
import './styles.css'

export default function Posts({ pokemon }) {
  return (
    <div className="posts">
      {pokemon.map((p) => (
        <PostCard pokemon={p} key={p.id}/>
      ))}
    </div>
  )
}
