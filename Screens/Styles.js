import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  headericon: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  AddTransContainer: {
    backgroundColor: "#DCDCDC",
    justifyContent: "space-evenly",
    flexDirection: "column",
    margin: 15,
    borderRadius: 5,
    padding: 10,
  },
  AddTransdataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  Homecontainer: {
    borderRadius: 5,
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#DCDCDC",
    padding: 5,
    justifyContent: "center",
  },
  HomedataContainer: {
    flex: 1,
  },
  Homethumbnail: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
  dataContent: {
    marginTop: 5,
    marginLeft: 5,
  },
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  titleFin: {
    color: "#18B515",
    fontSize: 17,
    fontWeight: "bold",
  },
  titleWal: {
    color: "#E2D96B",
    fontSize: 17,
    fontWeight: "bold",
  },
  titleSum: {
    color: "#6B99C3",
    fontSize: 17,
    fontWeight: "bold",
  },
  titleSup: {
    color: "#E538AE",
    fontSize: 17,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 13,
    color: "#16354D",
    fontWeight: "bold",
  },
  supportcontainer: {
    borderRadius: 5,
    backgroundColor: "#FFF",
    justifyContent: "center",
    padding: 5,
    margin: 10,
  },
  SupportDataContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom:30
  },
  SupportButtonContent:{
    flexDirection: "row",
    alignSelf:"flex-end"
  },
  SupportTextInp: {
    width: 175,
    textAlign: "left",
  },
  SendPlace: {
    elevation: 3,
    borderColor: "gray",
    borderRadius: 5,
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
    justifyContent: "flex-end",
  },
  SendTouch: {
    marginRight: 10,
    backgroundColor: "#E538AE",
    padding: 5,
    borderRadius: 5,
  },
  CancelTouch: {
    marginRight: 10,
    backgroundColor: "#8D9DA9",
    padding: 5,
    borderRadius: 5,
  },
  SendText: {
    fontSize: 15,
    fontWeight: "600",
    color: "white",
  },
  CancelText: {
    fontSize: 15,
    fontWeight: "600",
    color: "white",
  },
  testcontain: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#16354D",
    justifyContent: "center",
  },
});

export default Styles;
