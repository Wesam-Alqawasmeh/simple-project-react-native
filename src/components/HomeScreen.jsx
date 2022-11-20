import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, Button, Text } from "react-native";
import CharacterCard from "./CharacterCard";

function HomeScreen({
  characters,
  setCharacterPageData,
  setPage,
  totalCharacters,
  navigation,
}) {
  return (
    <View style={styles.container}>
      <Text>Total Characters: {totalCharacters}</Text>
      <ScrollView style={styles.scrollView}>
        {characters?.map((character) => (
          <CharacterCard
            character={character}
            navigation={navigation}
            setCharacterPageData={setCharacterPageData}
            key={character.id}
          />
        ))}
        <Button
          title="load more"
          onPress={() => setPage((prevPage) => prevPage + 1)}
        />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
  },
  scrollView: {
    width: "100%",
    paddingHorizontal: 25,
    flex: 1,
  },
});
