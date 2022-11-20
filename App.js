import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/components/HomeScreen";
import CharacterScreen from "./src/components/CharacterScreen";
import { getCharacters } from "./src/utils/fetcher";

const Stack = createNativeStackNavigator();

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [page, setPage] = useState(1);
  const [characterPageData, setCharacterPageData] = useState(null);

  useEffect(() => {
    (async () => {
      const {
        data: {
          characters: {
            results = [],
            info: { count = 0 },
          },
        },
      } = await getCharacters({ page: page });

      setCharacters((prevCharacters) => [...prevCharacters, ...results]);
      setTotalCharacters(count);
    })();
  }, [page]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen
              {...props}
              characters={characters}
              setCharacterPageData={setCharacterPageData}
              setPage={setPage}
              totalCharacters={totalCharacters}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Characters Screen">
          {(props) => (
            <CharacterScreen {...props} character={characterPageData} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
