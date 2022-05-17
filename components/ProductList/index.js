import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";

export const ProductList = ({ listProduct, setProduct }) => {
  const increaseQuantity = (index) => {
    const newList = [...listProduct];
    newList[index].quantity++;
    newList[index].totalPrice =
      newList[index].quantity * newList[index].unityPrice;
    setProduct(newList);
  };

  const decreaseQuantity = (index) => {
    if (listProduct[index].quantity > 0) {
      const newList = [...listProduct];
      newList[index].quantity--;
      newList[index].totalPrice =
        newList[index].quantity * newList[index].unityPrice;
      setProduct(newList);
    }
  };

  return (
    <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}> Lista de produtos</Text>
      <View style={styles.items}>
        {listProduct.map((product, index) => {
          return (
            <View style={styles.product} key={index}>
              <View style={styles.productFields}>
                <Text style={styles.title}>Nome </Text>
                <Text>{product.name}</Text>
              </View>
              <View style={styles.productFields}>
                <View style={styles.quantity} key={index}>
                  <Text style={styles.title}>Quantidade </Text>
                  <Text>{product.quantity}</Text>
                  <Button onPress={() => increaseQuantity(index)} title="+" />
                  <Button onPress={() => decreaseQuantity(index)} title="-" />
                </View>
              </View>
              <View style={styles.productFields}>
                <Text style={styles.title}>Preço Unitario </Text>
                <Text>{product.unityPrice}</Text>
              </View>
              <View style={styles.productFields}>
                <Text style={styles.title}>Preço Total </Text>
                <Text>{product.totalPrice}</Text>
              </View>
              <Button title="excluir item" />
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
    padding: 5,
  },
  quantity: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    color: "red",
    marginBottom: 10,
  },
  productFields: {
    marginBottom: 20,
  },
});
