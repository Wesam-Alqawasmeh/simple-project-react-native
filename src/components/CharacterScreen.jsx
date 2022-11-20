import { View, Text, StyleSheet, Image } from "react-native";

function CharacterScreen({
  character: {
    image,
    name,
    location: { name: locationName, type: locationType },
    status,
    species,
  },
}) {
  const info = [
    { headline: "Name", text: name },
    {
      headline: "Location",
      text: `${locationName || ""}-${locationType || ""}`,
    },
    { headline: "Status", text: status },
    { headline: "Species", text: species },
  ];

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.body}>
        {info.map(({ headline, text }) => (
          <View style={styles.textContainer} key={headline}>
            <Text style={[styles.text, styles.headline]}>{headline}:</Text>
            <Text style={styles.text}>{text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default CharacterScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#3658a3",
    flex: 1,
    padding: 15,
  },
  image: {
    resizeMode: "cover",
    flex: 1,
    borderRadius: 20,
  },
  body: {
    flex: 2,
    paddingTop: 50,
  },
  text: {
    color: "white",
    fontSize: 15,
    lineHeight: 30,
    flex: 2,
  },
  headline: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 20,
  },
  textContainer: {
    flexDirection: "row",
  },
});
