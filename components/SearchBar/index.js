import { StyleSheet, TextInput } from "react-native";
export const SearchBar = () => {
  return <TextInput style={styles.input} placeholder="Procure um produto" />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 30,
  },
});
