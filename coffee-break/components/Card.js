import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { getDatas } from "../actions/getDatas";
import { Feather } from "@expo/vector-icons";

const Card = () => {
  const [datas, setDatas] = useState([]);
  const [originalDatas, setOriginalDatas] = useState([]);

  useEffect(() => {
    getDatas().then((res) => {
      setDatas(res.data);
      setOriginalDatas(res.data);
      console.log(datas);
    });
  }, []);

  const search = (value) => {
    let filteredDatas = originalDatas.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    setDatas([...filteredDatas]);
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          onChangeText={search}
          style={styles.input}
          placeholder="Enter any word"
        />
        <TouchableOpacity>
          <Feather style={styles.icon} name="search" />
        </TouchableOpacity>
      </View>
      {datas?.map((item) => (
        <View key={item.id} style={[styles.cardHolder]}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.diseases}>{item.diseases} diseases</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cardHolder: {
    backgroundColor: "#ec7563",
    padding: 25,
    borderRadius: 20,
    marginVertical: 5,
  },
  title: {
    color: "#fffaf8",
    fontSize: 25,
    fontWeight: "500",
    marginBottom: 10,
  },
  diseases: {
    color: "#fcfcfc",
    fontSize: 17,
    marginBottom: 7,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 20,
  },
  input: {
    borderWidth: 0.5,
    borderColor: "lightgrey",
    width: "100%",
    padding: 8,
    borderRadius: 6,
  },
  icon: {
    fontSize: 30,
    position: "absolute",
    right: 5,
    top: 2,
    color: "lightgrey",
  },
});

export default Card;
