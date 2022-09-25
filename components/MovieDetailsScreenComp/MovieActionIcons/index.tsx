import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { Text, View } from "../../Themed";

import React from "react";

const MovieActionIcons = () => {
  return (
    <View style={{ flexDirection: "row", marginVertical: 25 }}>
      <View style={{ alignItems: "center", marginHorizontal: 35 }}>
        <AntDesign name="plus" size={18} color="white" />
        <Text style={{ color: "darkgrey", marginTop: 10 }}>My List</Text>
      </View>
      <View style={{ alignItems: "center", marginHorizontal: 35 }}>
        <SimpleLineIcons name="like" size={18} color="white" />
        <Text style={{ color: "darkgrey", marginTop: 10 }}>Rate</Text>
      </View>
      <View style={{ alignItems: "center", marginHorizontal: 35 }}>
        <Ionicons name="share-social" size={18} color="white" />
        <Text style={{ color: "darkgrey", marginTop: 10 }}>Share</Text>
      </View>
    </View>
  );
};

export default MovieActionIcons;
