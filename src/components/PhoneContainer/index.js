import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./style";

const PhoneContainer = (props) => {
  return (
    <View style={styles.phoneBlock}>
      <Image
        style={styles.phonePhoto}
        source={require("../../../assets/Phone.png")}
      />
      <Text style={styles.phoneTitle}>{props.attributes.name}</Text>
      <Text style={styles.phonePrice}>{props.attributes.display_price}</Text>
    </View>
  );
};

export default PhoneContainer;
