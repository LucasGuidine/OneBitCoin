import { StyleSheet, Text, View, SafeAreaView, PlatformColor, Platform, StatusBar } from 'react-native';
import CrrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuatationsList from './src/components/QuotationsList';
import QuatationsItens from './src/components/QuotationsList/QuatationsItens';

function addZero(number){
  if(number<=9){
    return "0" + number
  }
  return number
}

function url(qtdDays){
  const data = new Date();
  const listLastDays=qtdDays;
  const end_date=
  `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`;
  date.setDate(data.getDate()-listLastDays);
  const start_date=
  `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`;
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar
      backgroundColor='rgb(13, 127, 13)'
      barStyle="dark-content"
      />
      <CrrentPrice/>
      <HistoryGraphic/>
      <QuatationsList/>
      <QuatationsItens/>
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
