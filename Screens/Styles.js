import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Styles = StyleSheet.create({
    headericon: {
        width: 40,
        height: 40,
        marginLeft:10
      },
      Homecontainer: {
        height: 80,
        elevation: 3,
        borderColor: "gray",
        borderRadius: 5,
        flexDirection: "row",
        marginLeft: 20,
        marginTop: 10,
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
})

export default Styles