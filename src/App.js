import { useContext } from 'react';
import './App.css';
import { ActualWeather } from './components/ActualWeather';
import { Context } from './lib/settingContext';
import { LocationForm } from './components/LocationForm';
import { SimpleBackdrop } from './components/NavigationRequest';
import { DiscreteSliderMarks } from './elements/Slider';
import { mix } from './helpers/mix';


function App() {
  const { temp, coordinate } = useContext(Context)
  const color = mix('ff8c00', '00ffff', temp)
  return (
    <main className={`App`} style={{ backgroundColor: `${color}` }}>
      <SimpleBackdrop />
      <LocationForm />
      {coordinate && <ActualWeather />}
      {!coordinate && <h3>CHOOSE LOCATION</h3>}
      <DiscreteSliderMarks />
    </main>
  );
}
export default App;
