import PostCard from "../postcard";

export default function Posts({ pokemon }) {
  return (
      pokemon.map((p) => (
        <PostCard pokemon={p} key={p.id}/>
      ))
  )
}
