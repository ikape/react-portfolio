import { useState } from 'react';
import { About } from './components/About';
import { Card } from './components/Card';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar'
import { Skills } from './components/Skills';


function App() {

  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode && 'dark'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
      <About />
      <Skills />
      <Card />
    </div>
  );
}

export default App;
