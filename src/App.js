import { View, StyleSheet } from 'react-native-web';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react'; 
import Home from './pages/home';
import Calendar from './pages/calendar';
import Credits from './pages/credits';
// import Footer from './components/footer';
// import NavBar from './components/navbar';

function App() {
  const [age, setAge] = useState(18);
  const [height, setHeight] = useState({});
  const [weight, setWeight] = useState({});
  const [waist, setWaist] = useState({});
  const metric = {
    weight: 'kg',
    height: 'cm'
  }
  const imperial = {
    weight: 'lbs',
    height: 'inches',
  }
  const largeImperial = {
    weight: 'stone/lbs',
    height: 'feet/inches'
  }
  const [displayUnits, setDisplayUnits] = useState(metric);
  return (
    <BrowserRouter>
      <View style={styles.app}>
        {/* <Header /> */}
        
        {/* <Footer /> */}
      </View>


      <Routes>
        <Route key="home" index element={<Home weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} waist={waist} setWaist={setWaist} age={age} setAge={setAge}/>} />
        <Route key="calendar" path="/calendar" element={<Calendar />} />
        <Route key="credits" path="/credits" element={<Credits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const styles = StyleSheet.create({
  app: {
    textAlign: 'center'
  }
})