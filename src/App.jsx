import {useContext} from 'react';
import MyContext from './context/MyContext';
import './App.css';
import DropDown from './components/DropDown';
import Weather from './components/Weather';

const App = () => {
    const {citySelect} = useContext(MyContext)


  return (
    <main>
     <DropDown />
     {citySelect && <Weather />}
    </main>
  );
}

export default App;

