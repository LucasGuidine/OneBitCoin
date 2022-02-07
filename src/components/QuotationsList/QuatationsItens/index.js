import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style"

export default function QuatationsItens(){
    return(
        <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image
          style={styles.logBitcoin}
          source={require("../../../img/5168.png")}
          />
          <Text style={styles.dayCotation}> 07/02/2022</Text>
        </View>
      </View>
      <View style={styles.contextRigth}>
        <Text style={styles.price}>$ 53331.052</Text>
      </View>
    </View>
    )
}