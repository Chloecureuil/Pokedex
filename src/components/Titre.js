import { StyleSheet, Text, View } from "react-native";

export default function Titres() {
    return ( 
        <View>
            <Text style={styles.sub}>Bienvenue dans</Text>     
            <Text style={styles.titre} >Himitsu's POKEDEX</Text>
        </View> 
    );
}

const styles = StyleSheet.create({
    titre: {
        fontSize: 24,
        fontWeight: "bold",
        padding: 5
    },
    sub: {
        fontSize: 16,
        color: "grey",
        padding: 5
    }
});
