import React, { useState } from "react";
import { ScrollView, View } from "react-native";

import SearchBar from "../../components/SearchScreenComp/SearchBar";
import SearchListItem from "../../components/SearchScreenComp/SearchListItem";
import { Text } from "../../components/Themed";
import movieSearchList from "../../assets/data/movieSearchList";
import styles from "./styles";

const SearchScreen = () => {
  const [query, setSearchQuery] = useState("");
  const searchMovieResult = movieSearchList.movies.filter((movie) =>
    movie.name.toLowerCase().includes(query)
  );

  return (
    <View>
      <SearchBar
        term={query}
        onTermChange={(newTerm: string) => setSearchQuery(newTerm)}
      />
      <Text style={styles.title}>Top Searches</Text>
      <ScrollView style={styles.listContainer}>
        {searchMovieResult && searchMovieResult.length > 0
          ? searchMovieResult.map((item) => (
              <SearchListItem key={item.id} movie={item} />
            ))
          : movieSearchList.movies.map((item) => (
              <SearchListItem key={item.id} movie={item} />
            ))}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
