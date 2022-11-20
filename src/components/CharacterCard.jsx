import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";

function CharacterCard({ character, setCharacterPageData, navigation }) {
  const handleClick = () => {
    navigation?.navigate("Characters Screen");
    setCharacterPageData(character);
  };
  return (
    <Pressable onPress={handleClick}>
      <View style={[styles.cardContainer, styles.shadowProp]}>
        <Image source={{ uri: character.image }} style={styles.cardImage} />
        <View style={styles.cardBody}>
          <Text style={[styles.name, styles.whiteText]}>{character.name}</Text>
          <Text style={[styles.specs, styles.whiteText]}>
            {character.status} {character.species}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default CharacterCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#3658a3",
    width: "100%",
    height: 100,
    marginTop: 10,
    borderRadius: 15,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  cardBody: {
    marginLeft: 20,
    flex: 1,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 10,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
  },
  specs: {
    marginTop: 5,
    padding: 3,
    borderRadius: 120,
  },
  whiteText: {
    color: "white",
  },
});
