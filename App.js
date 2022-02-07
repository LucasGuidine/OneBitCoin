import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, PlatformColor, Platform, StatusBar } from 'react-native';
import CrrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuatationsList from './src/components/QuotationsList';

function addZero(number){
  if(number<=9){
    return "0" + number
  }
  return number
}

function url(qtdDays){
  const date = new Date();
  const listLastDays=qtdDays;
  const end_date=
  `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`;
  date.setDate(date.getDate()-listLastDays);
  const start_date=
  `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`;
}

async function getListCoins(url){
  let response = await fetch(url);
  let returnApi = await response.json();
  let selectListQuotations = returnApi.bpi;
  const queryCoinsList = Object.keys(selectListQuotations).map((key)=>{
    return{
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotations[key]
    };
  });
  let data = queryCoinsList.reverse();
  return data;
}

async function getPriceCoinsGraphic(url) {
  let responseG = await fetch(url);
  let returnApiG = await responseG.json();
  let selectListQuotationsG = returnApiG.bpi;
  const queryCoinsListG = Object.keys(selectListQuotationsG).map((key) => {
    return selectListQuotationsG[key];
  });
  let dataG = queryCoinsListG;
  return dataG;
}

export default function App() {

  const [coinsList, setCoinsList] = useState([])
  const [coinGraphicList, setCoinsGraphicList] = useState([0])
  const [days, setDays] = useState(1)
  const [updateData, setUpdateData] = useState(true)

  function updateDays(number){
    setDays(number);
    setUpdateData(true)
  }

  useEffect(()=>{
    getListCoins(url(days)).then((data)=>{
      setCoinsList(data)
    });
    getPriceCoinsGraphic(url(days)).then((dataG)=>{
      setCoinsGraphicList(dataG)
    });
    if(updateData){
      setUpdateData(false)
    }
  },[updateData]);

  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar
      backgroundColor='rgb(13, 127, 13)'
      barStyle="dark-content"
      />
      <CrrentPrice/>
      <HistoryGraphic infoDataGraphic={coinGraphicList}/>
      <QuatationsList filterDay={updateDays} listTransactions={coinsList}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40: 0
  },
});
