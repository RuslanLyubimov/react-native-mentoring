import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./style";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.innerHeader}>
        <Image
          style={styles.logo}
          source={require("../../../assets/burger.png")}
        />
        <Text style={styles.logoText}>Ecommerce Store</Text>
        <Image
          style={styles.logo}
          source={require("../../../assets/Vector.png")}
        />
      </View>
    </View>
  );
};

export default Header;
