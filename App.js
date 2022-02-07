import { StyleSheet, Text, View, SafeAreaView, PlatformColor, Platform, StatusBar } from 'react-native';
import CrrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuatationsList from './src/components/QuotationsList';
import QuatationsItens from './src/components/QuotationsList/QuatationsItens';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar
      backgroundColor='#f50d41'
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
