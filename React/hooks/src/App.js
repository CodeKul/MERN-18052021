import './App.css';
import Count from './useState/Count';
import HandleLogin from './useState/HandleLogin';
import ArrayState from './useState/ArrayState';
import EffectDemo2 from './useEffect/EffectDemo2';
import RefDemo from './useRef/RefDemo';
import NoRerender from './useRef/NoRerender';
import StopWatch from './useRef/StopWatch';
import Parent from './useContext/Parent';
import { createContext } from 'react'
import Content from './useContext/Theme-context/Content';
import Navbar from './useContext/Theme-context/Navbar';
import DarkThemeProvider from './useContext/Theme-context/ThemeToggleProvider'
export const userContext = createContext()

function App() {
  let username = "test"
  return (
    <div>
      {/* useState
      <Count/>
      <HandleLogin/>
      <ArrayState/> */}

      {/* useEffect
      <EffectDemo2/> */}


      {/* useRef
        <RefDemo/>
        <NoRerender/>
        <StopWatch/> */}
       
       {/* <Parent username={username}/>  */}

        {/* <userContext.Provider value={username}>
            <Parent/>
            <Content/>
        </userContext.Provider> */}

      {/* 3 */}

        <DarkThemeProvider> 
            <Navbar/>
            <Content/>
        </DarkThemeProvider>

    </div>
  );
}
//1)createContext()
//2)Provider - value
//3)useContext
export default App;
