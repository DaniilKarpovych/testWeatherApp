import { useContext } from 'react';
import './App.css';
import { ActualWeather } from './components/actualWeather';
import { Context } from './lib/settingContext';
import { LocationForm } from './components/locationForm';
import { SimpleBackdrop } from './components/navigationRequest';
import { DiscreteSliderMarks } from './elements/slider';


function App() {
  const {temp, coordinate} = useContext(Context)
   
  const tempClass = temp<-10 ? 'cold': temp<30 ? 'warm':'hot';
  return (
    <main className={`App ${tempClass}`}>
      <SimpleBackdrop />
      <LocationForm />
      {coordinate && <ActualWeather  />}
      {!coordinate && <h3>CHOOSE LOCATION</h3>}
      <DiscreteSliderMarks />
    </main>
  );
}
export default App;
