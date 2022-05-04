import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export const ProductList = ({ listProduct }) => {
  return (
    <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}> Lista de produtos</Text>
      <View style={styles.items}>
        {listProduct.map((product, index) => {
          return (
            <View style={styles.product} key={index}>
              <Text>Identificador </Text>
              <Text>{product.id}</Text>
              <Text>Nome </Text>
              <Text>{product.name}</Text>
              <Text>Quantidade </Text>
              <Text>{product.quantity}</Text>
              <Text>Preço Unitario </Text>
              <Text>{product.unityPrice}</Text>
              <Text>Preço Total </Text>
              <Text>{product.totalPrice}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },

  product: {
    margin: 10,
    borderWidth: 4,
  },
});
