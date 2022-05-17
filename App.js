import React, { useState } from "react";
import { StyleSheet, TextInput, View, ScrollView, Button } from "react-native";
import { ProductList } from "./components/ProductList";
import { SearchBar } from "./components/SearchBar";

export default function App() {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    quantity: "",
    unityPrice: "",
    totalPrice: "",
  });

  const [listProduct, setListProduct] = useState([]);

  const handleAddProduct = () => {
    if (
      product.name !== "" &&
      product.quantity !== "" &&
      product.unityPrice !== ""
    ) {
      setListProduct([...listProduct, product]);
      setProduct({
        name: "",
        quantity: "",
        unityPrice: "",
      });
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <SearchBar />

        <TextInput
          style={styles.input}
          value={product.name}
          placeholder="Nome"
          onChangeText={(text) => setProduct({ ...product, name: text })}
        />

        <TextInput
          style={styles.input}
          value={product.quantity}
          placeholder="Quantidade em estoque"
          onChangeText={(text) => setProduct({ ...product, quantity: text })}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          value={product.unityPrice}
          placeholder="Valor Unitario"
          onChangeText={(text) => setProduct({ ...product, unityPrice: text })}
          keyboardType="numeric"
        />

        <Button title="Cadastrar Produto" onPress={handleAddProduct} />
        <ProductList listProduct={listProduct} setProduct={setProduct} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
    backgroundColor: "#fff",
  },
  input: {
    margin: 10,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});
