import React from "react";
import { View, Image, Picker, Text, ScrollView } from "react-native";
import Icon from "@expo/vector-icons/Entypo";

export default class Home extends React.Component {
  state = {
    city: "São Paulo",
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#FFF" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 40,
            marginHorizontal: 20,
          }}
        >
          <View style={{ width: "10%" }}>
            <Image source={require("../images/1.png")} />
          </View>

          <View
            style={{
              width: "80%",
              alignItems: "center",
            }}
          >
            <Picker
              selectedValue={this.state.city}
              style={{ height: 50, width: 160 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ city: itemValue })
              }
            >
              <Picker.Item
                label="São Paulo"
                value="São Paulo"
                style={{ fontWeight: "bold" }}
              />
              <Picker.Item
                label="Morro Agudo"
                value="Morro Agudo"
                style={{ fontWeight: "bold" }}
              />
              <Picker.Item
                label="Ribeirão Preto"
                value="Ribeirão Preto"
                style={{ fontWeight: "bold" }}
              />
            </Picker>
          </View>
          <View style={{ width: "10%" }}>
            <Icon name="magnifying-glass" size={30} />
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 30,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            O que você
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            deseja comer hoje?
          </Text>
        </View>
      </ScrollView>
    );
  }
}
