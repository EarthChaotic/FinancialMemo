import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { HeaderButtons } from "react-navigation-header-buttons";
import Styles from "./Styles";

const HomeScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require("../Screens/Pics/MemoHeader.png")}
              style={Styles.headericon}
            />
          </TouchableOpacity>
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 40 }}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("FINANCIAL")}>
          <View style={Styles.Homecontainer}>
            <Image
              source={require("../Screens/Pics/Finance Icon.png")}
              style={Styles.Homethumbnail}
            />
            <View style={Styles.dataContent}>
              <Text style={Styles.titleFin}>FINANCIAL</Text>
              <Text style={Styles.detail}>
                มาบันทึกรายรับ - รายจ่ายของคุณและจัดข้อมูล{"\n"}
                ของคุณให้เป็นระเบียบกันเถอะ!!
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("WALLET")}>
          <View style={Styles.Homecontainer}>
            <Image
              source={require("../Screens/Pics/Wallet Icon.png")}
              style={Styles.Homethumbnail}
            />
            <View style={Styles.dataContent}>
              <Text style={Styles.titleWal}>WALLET</Text>
              <Text style={Styles.detail}>
                มีหลายกระเป๋าตังช่วยให้จัดสรรเงินให้เป็นระเบียบ {"\n"}มากขึ้นนะ
                มาจัดสรรเงินให้เรียบร้อยกัน
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SUMMARY")}>
          <View style={Styles.Homecontainer}>
            <Image
              source={require("../Screens/Pics/Summary Icon.png")}
              style={Styles.Homethumbnail}
            />
            <View style={Styles.dataContent}>
              <Text style={Styles.titleSum}>SUMMARY</Text>
              <Text style={Styles.detail}>
                ถ้าทำรายรับรายจ่ายกับแอพเราแล้วอย่าลืมมา {"\n"}ดูหน้านี้นะ
                เรามีสรุปการใช้เงินของคุณให้ด้วยนะ!!
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SUPPORT")}>
          <View style={Styles.Homecontainer}>
            <Image
              source={require("../Screens/Pics/Support Icon.png")}
              style={Styles.Homethumbnail}
            />
            <View style={Styles.dataContent}>
              <Text style={Styles.titleSup}>SUPPORT</Text>
              <Text style={Styles.detail}>
                พบบัคหรือปัญหาในการใช้แอพพลิเคชั่นของเรา {"\n"}
                สามารถติดต่อเราให้ช่วยเหลือได้ทันทีเลยนะ
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
