import React, { Fragment } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import QuatationsItens from "./QuatationsItens";
import styles from "./style"

export default function QuatationsList(props){

    const daysQuery = props.filterDay

    return(
        <Fragment>
        <View style={styles.filters}>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={()=> daysQuery(7)}
            >
                <Text style={styles.textButtonQuery}>7D</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={()=> daysQuery(15)}
            >
                <Text style={styles.textButtonQuery}>15D</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={()=> daysQuery(30)}
            >
                <Text style={styles.textButtonQuery}>1M</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={()=> daysQuery(90)}
            >
                <Text style={styles.textButtonQuery}>3M</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonQuery}
            onPress={()=> daysQuery(180)}
            >
                <Text style={styles.textButtonQuery}>6M</Text>
            </TouchableOpacity>
        </View>
        <ScrollView>
            <FlatList
            data={props.listTransactions}
            renderItem={({item})=>{
                return <QuatationsItens valor={item.valor} data={item.data}/>
            }}
            />
        </ScrollView>
        </Fragment>
    )
}