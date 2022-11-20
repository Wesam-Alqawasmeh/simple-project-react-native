export async function getCharacters({ page }) {
  try {
    const data = await fetch("https://rickandmortyapi.com/graphql", {
      method: "POST",
      body: JSON.stringify({
        query: `query characters($page: Int){
                characters(page: $page){
                  info{
                    count
                    pages
                    next
                    prev
                  }
                  results{
                    location{
                      name
                      type
                      dimension
                    }
                    image
                    id
                    name
                    status
                    species
                    type
                    gender
                  }
                }
              }`,
        variables: {
          page: page,
        },
      }),
      headers: {
        "content-type": "application/json",
      },
    });

    const jsonData = await data.json();
    return jsonData;
  } catch (error) {
    console.log("Failed to fetch the characters: ", error);
  }
}
