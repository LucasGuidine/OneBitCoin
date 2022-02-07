import React from "react";
import { View, Text } from "react-native";
import styles from "./style"

export default function CrrentPrice(props){
    return(
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>$ {props.lastCotation}</Text>
            <Text style={styles.textTitle}>Última cotação</Text>
        </View>
    )
}