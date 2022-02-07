import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    mainContent:{
        width:"95%",
        height:"auto",
        backgroundColor:"black",
        marginLeft:"3%",
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        padding:10,
    },
    logBitcoin:{
        width:40,
        height:40,
        marginLeft:2,
    },
    boxLogo:{
        flexDirection:"row",
        alignItems:"center",
    },
    contextLeft:{
        width:"36%",
        height:"100%",
        alignItems:"flex-start",
    },
    contextRigth:{
        width:"60%",
        alignItems:"flex-end",
    },
    dayCotation:{
        fontSize:16,
        paddingLeft:2,
        color: 'rgb(13, 127, 13)',
        fontWeight:"bold",
    },
    price:{
        color:'rgb(13, 127, 13)',
        fontSize:18,
        fontWeight:"bold",
    }
});

export default styles