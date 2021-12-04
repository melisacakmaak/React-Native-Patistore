import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./ProductCard.style";
const ProductCard = ({ product }) => {
  return (
    <View style={styles.container}>
      <View style={styles.body_container}>
        <Image source={{ uri: product.imgURL }} style={styles.image} />
        <View style={styles.text_container}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>

          {product.inStock && (
            <View style={styles.inStock_Container}>
              <Text style={styles.inStock}>Out of Stock</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
export default ProductCard;
