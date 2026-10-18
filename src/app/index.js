import PokemonCard from "@/components/PokemonCard";
import Titres from "@/components/Titre";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Titres />
      <Text style={styles.subtitle}>{`Il y a ${POKEMONS.length} pokemons !`}</Text>
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {POKEMONS.map((pokemon) => (
          <PokemonCard
            key={pokemon.number}
            name={pokemon.name}
            number={pokemon.number}
            type={pokemon.type}
            color={pokemon.color}
            image={`${ARTWORK}${pokemon.number}.png`}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Permet au View de prendre tout l'écran
    paddingTop: 50,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: "center",
  },
  scrollContent: {
    alignItems: "center", // Centre les cartes à l'intérieur du ScrollView
    paddingBottom: 20,
  },
});

const ARTWORK =
"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

const POKEMONS = [
  { number: 1, name: "Bulbizarre", type: "Plante", color: "#00dc2c" },
  { number: 4, name: "Salamèche", type: "Feu", color: "#dc4600" },
  { number: 7, name: "Carapuce", type: "Eau", color: "#008fdc" },
  { number: 25, name: "Pikachu", type: "Électrik", color: "#dccd00" },
  { number: 37, name: "Goupix", type: "Feu", color: "#dc4600" },
  { number: 43, name: "Mystherbe", type: "Plante", color: "#00dc2c" },
];