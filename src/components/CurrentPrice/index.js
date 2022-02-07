import React from "react";
import { View, Text } from "react-native";
import styles from "./style"

export default function CrrentPrice(){
    return(
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>$ 227.859,49</Text>
            <Text style={styles.textTitle}>Última cotação</Text>
        </View>
    )
}