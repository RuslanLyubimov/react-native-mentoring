import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  RefreshControl,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { SearchBar } from "react-native-elements";
import PhoneContainer from "./src/components/PhoneContainer";
import Header from "./src/components/Header";
export default function App() {
  const [products, setProducts] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  async function getProducts() {
    const response = await fetch(
      "https://demo.spreecommerce.org/api/v2/storefront/products"
    );
    if (response.ok) {
      const product = await response.json();
      setProducts(product.data);
    }
  }
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.search}>
        <SearchBar lightTheme placeholder="" />
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.body}>
          {products.map(({ attributes }) => {
            return <PhoneContainer attributes={attributes} />;
          })}
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  search: {
    width: "100%",
    height: 74,
    backgroundColor: "#fff",
    elevation: 8,
  },

  body: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
