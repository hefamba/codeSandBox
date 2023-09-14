import "./RandomPokemon.css";

export default function RandomPokemon() {
  const pokeNumber = Math.floor(Math.random() * 150) + 1;
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNumber}.png`;
  return (
    <div className="container">
      <h1>Pokemon #{pokeNumber}</h1>
      <img alt="pokemon" className="pokemon" src={url} />
    </div>
  );
}
