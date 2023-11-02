import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BigRect from './components/composants/BigRect';
import Cercle from './components/composants/Cercle';
import PubCar from './components/composants/PubCar';
import PubRect from './components/composants/PubRect';
import SmallRect from './components/composants/SmallRect';
import NavApp from './components/navigation/NavApp';
import MainContainer from './components/vues/MainContainer';
import NewNav from './components/navigation/NewNav';
//import Page from './Page';


export default function App() {
  return (
    <NewNav />
  );
}

 {/*<NavApp />*/}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
