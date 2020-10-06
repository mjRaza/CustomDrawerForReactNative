import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Text, H2, Separator, Thumbnail } from "native-base";
const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
const vh = Dimensions.get("window").height / 100;
const vw = Dimensions.get("window").width / 100;

const CustomDrawerScreen = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.profileContainer}>
          <Thumbnail large source={{ uri: uri }} />
          <View style={styles.profileData}>
            <H2>Jaffar Raza</H2>
            <Text style={{ color: "grey" }}>+92312120424</Text>
          </View>
        </View>
        <View style={{ flex: 1,flexDirection:'column', justifyContent:"space-around" }}>
          <View style={{ flex: 1, }}>
            <DrawerItem label="Request Payment" onPress={() => alert()} />
            <DrawerItem label="Buy BTC" onPress={() => alert()} />
            <DrawerItem label="Sell BTC" onPress={() => alert()} />
            <DrawerItem label="Dispute" onPress={() => alert()} />
            <DrawerItem label="Ticket" onPress={() => alert()} />
            <DrawerItem label="Settings" onPress={() => alert()} />
          </View>

          <View style={{ flex: 1 }}>
            <DrawerItem label="Logout" onPress={() => alert()} />
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
export default CustomDrawerScreen;
const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    marginTop: 2 * vh,
    marginLeft: 2 * vh,
    flexDirection: "row",
  },
  profileData: {
    marginLeft: 15,
    justifyContent: "center",
  },
});
