import { Image, StyleSheet, Text, View } from "react-native";

export default function PokemonCard({ pokemons }) {
  return (
    <View style={styles.container}>
      {pokemons.map((pokemon) => (
          <View key={pokemon.number} style={[styles.card, { backgroundColor: pokemon.color }]}>          <Image
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.number}.png`,
            }}
            style={styles.photoProfil}
          />
          <View style={styles.bio}>
            <Text style={styles.sub}>#{pokemon.number}</Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Text style={styles.type}>Type : {pokemon.type}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 8,
    width: 300,
    marginVertical: 5,
  },
  bio: {
    flexDirection: "column",
    alignItems: "center",
    padding: 15
  },
  photoProfil: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "white",
  },
  sub: {
    fontSize: 16,
    color: "#787878",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  type: {
    fontSize: 14,
    color: "black",
  },
});