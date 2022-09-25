import React, { useState } from "react";
import { Text, View } from "../../components/Themed";

import EpisodeItem from "../../components/MovieDetailsScreenComp/EpisodeItem";
import MovieInfo from "../../components/MovieDetailsScreenComp/MovieInfo";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import VideoPlayer from "../../components/MovieDetailsScreenComp/VideoPlayer";
import movie from "../../assets/data/movie";
import styles from "./styles";

const firstEpisode = movie.seasons.items[0].episodes.items[0];
const firstSeason = movie.seasons.items[0];

const MovieDetailScreen = () => {
  const [episode, setEpisode] = useState(firstEpisode);
  const [selectedSeason, setSelectedSeason] = useState(firstSeason);
  const seasonsNames = movie.seasons.items.map((season) => season.name);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        {/* <Image style={styles.img} source={{uri: episode.poster}} /> */}
        <VideoPlayer episodes={episode} />
        <View style={{ margin: 10 }}>
          <Text style={styles.title}>{movie.title}</Text>
          <MovieInfo />
        </View>
        <Picker
          style={styles.picker}
          dropdownIconColor="lightgrey"
          selectedValue={selectedSeason.name}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedSeason(movie.seasons.items[itemIndex]);
          }}
        >
          {seasonsNames.map((name) => (
            <Picker.Item
              style={{ marginVertical: 2, backgroundColor: "red" }}
              label={name}
              value={name}
              key={name}
            />
          ))}
        </Picker>
        <View>
          {selectedSeason.episodes.items.map((item) => (
            <EpisodeItem key={item.id} episodes={item} onPress={setEpisode} />
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default MovieDetailScreen;
