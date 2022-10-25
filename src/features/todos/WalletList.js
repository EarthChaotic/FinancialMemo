import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { color } from "react-native-reanimated";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletewallet } from "./WalletSlice";

const WalletList = () => {
  const deletewallethandler = (id) => {
    dispatch(deletetrans({ id: id }));
  };

  const Wallets = useSelector((state) => state.Wallets);
  return (
    <View>
      {Wallets.map((wallet) => (
        <TouchableOpacity>
          <View style={styles.item}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{color:"#FFF" , fontWeight:"bold"}}>{wallet.walletn}</Text>
            </View>
            <View style={{ marginTop: 3 }}>
              <Text style={{color:"#FFF"}}>จำนวนเงิน {wallet.amount} ฿</Text>
              <Text style={{color:"#FFF"}}>รายละเอียด {wallet.Type}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default WalletList;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#16354D",
    padding: 30,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin:10
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemTextTop: {
    maxWidth: "80%",
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
    flexDirection: "column",
  },
  itemText: {
    maxWidth: "80%",
    color: "#FFF",
    fontSize: 10,
    flexDirection: "column",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
});
