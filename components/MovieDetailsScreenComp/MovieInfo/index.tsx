import { Text, View } from "../../Themed";

import MovieActionIcons from "../MovieActionIcons";
import MovieDetailsButtons from "../MovieDetailsButtons";
import React from "react";
import movie from "../../../assets/data/movie";
import styles from "./styles";

const MovieInfo = () => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.match}>98% match</Text>
        <Text style={styles.year}>{movie.year}</Text>
        <View style={styles.ageContainer}>
          <Text style={styles.age}>12+</Text>
        </View>
        <Text style={styles.year}>{`${movie.numberOfSeasons} Seasons`}</Text>
      </View>
      <MovieDetailsButtons />
      <Text style={{ marginBottom: 16, marginTop: 8 }}>{movie.plot}</Text>
      <Text style={styles.cast}>Cast: {movie.cast}</Text>
      <Text style={styles.cast}>Director: {movie.creator}</Text>
      <MovieActionIcons />
    </View>
  );
};

export default MovieInfo;
