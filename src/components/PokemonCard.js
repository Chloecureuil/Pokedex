import { Image, StyleSheet, Text, View } from "react-native";

export default function PokemonCard({ name, number, type, image, color }) {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>      
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.bio}>
        <Text style={styles.sub}>#{number}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.type}>Type : {type}</Text>
      </View>
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
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
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
  scrollViewContent: {
    maxHeight: 600,
  }
});