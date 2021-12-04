import React, { useState } from "react";
import { View, FlatList } from "react-native";
import data from "../../data.json";
import ProductCard from "../ProductCard/ProductCard";
import SearhBar from "../SearchBar/SearhBar";

export default function Product() {
  const [list, setList] = useState(data);
  const renderProduct = ({ item }) => <ProductCard product={item} />;

  const searchProduct = () => <View />;

  const handleChangeText = (text) => {
    const filterProducts = data.filter((product) => {
      const searchText = text.toLowerCase();
      const currentTitle = product.title.toLowerCase();
      return currentTitle.indexOf(searchText) > -1;
    });
    setList(filterProducts);
  };

  return (
    <View style={{ paddingTop: 50 }}>
      <SearhBar title="Search.." onChange={handleChangeText} />
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={list}
        renderItem={renderProduct}
        ItemSeparatorComponent={searchProduct}
      />
    </View>
  );
}
