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
  const [height, setHeight] = useState(181);
  const [weight, setWeight] = useState('78');
  const [waist, setWaist] = useState(38);
  const [sex, setSex] = useState("-");
  const [heightUnits, setHeightUnits] = useState('cm');
  const [weightUnits, setWeightUnits] = useState('kg');
  const [waistUnits, setWaistUnits] = useState('"');
  const [calorieIntake, setCalorieIntake] = useState(2500);
  const [exercise, setExercise] = useState('-')
  
  return (
    <BrowserRouter>
      <View style={styles.app}>
        {/* <Header /> */}
        
        {/* <Footer /> */}
      </View>
      <Routes>
        <Route key="home" index element={<Home weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} waist={waist} setWaist={setWaist} age={age} setAge={setAge} heightUnits={heightUnits} setHeightUnits={setHeightUnits} weightUnits={weightUnits} setWeightUnits={setWeightUnits} waistUnits={waistUnits} setWaistUnits={setWaistUnits} sex={sex} setSex={setSex} calorieIntake={calorieIntake} setCalorieIntake={setCalorieIntake} exercise={exercise} setExercise={setExercise}/>} />
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