import React, { useEffect, useRef, useState } from "react";

import { Episode } from "../../../types";
import { Playback } from "expo-av/build/AV";
import { Video } from "expo-av";
import { View } from "../../Themed";
import styles from "./styles";

interface VideoPlayerProps {
  episodes: Episode;
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const { episodes } = props;

  const video = useRef<Playback>(null);

  useEffect(() => {
    if (!video) {
      return;
    }
    (async () => {
      await video?.current?.unloadAsync();
      await video.current?.loadAsync({ uri: episodes.video }, {}, false);
    })();
  }, [episodes]);

  const [status, setStatus] = useState({});
  return (
    <View>
      <Video
        // ref={video}
        style={styles.video}
        source={require("../../../assets/suits.mp4")}
        resizeMode="contain"
        shouldPlay={true}
        useNativeControls={true}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View>
        {/* <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        /> */}
      </View>
    </View>
  );
};

export default VideoPlayer;
