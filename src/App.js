import React from 'react';
import './App.css';
import Social from './components/Social/Social'
import Panel from './components/Panel/Panel'
import Tabs from './components/Tabs/Tabs'
import Logo from './components/Logo/Logo'
import Adaptive from './components/Adaptive/Adaptive'
function App() {
  return (
    <div className="App">
      <Adaptive />
      <Logo />
      <Social />  
      <Tabs />
      <Panel />

    </div>
  );
}

export default App;
