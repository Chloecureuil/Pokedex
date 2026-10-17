import PokemonCard from "@/components/PokemonCard";
import Titres from "@/components/Titre";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Titres />
      <PokemonCard pokemons={POKEMONS} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const ARTWORK =
"https://raw.githubusercontent.com/PokeAPI/sprites" +
"/master/sprites/pokemon/other/official-artwork/";

const POKEMONS = [
  { number: 1, name: "Bulbizarre", type: "Plante", color: "#00dc2c" },
  { number: 4, name: "Salamèche", type: "Feu", color: "#dc4600" },
  { number: 7, name: "Carapuce", type: "Eau", color: "#008fdc" },
  { number: 25, name: "Pikachu", type: "Électrik", color: "#dccd00" },
  { number: 37, name: "Goupix", type: "Feu", color: "#dc4600" },
  { number: 43, name: "Mystherbe", type: "Plante", color: "#00dc2c" },
];