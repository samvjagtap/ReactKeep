import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion'
import Kepp from './components/Kepp/Kepp'
import ComA from './components/ComA';
import { createContext } from 'react';

const firstname = createContext();
const lastname = createContext();

function App() {
  return (
    <>
      {/* <Accordion /> */}
      <Kepp />
      {/* <firstname.Provider value={'Sameer'}>
        <lastname.Provider value={'Jagtap'}>
          <ComA/>
        </lastname.Provider>
      </firstname.Provider> */}
    </>  
  );
}

export default App;
export {firstname, lastname}
