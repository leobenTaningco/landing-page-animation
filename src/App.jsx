import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Login from './components/Login'

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className='background'>
      <Header />
      <div className="landingContent">
        <div className="landingBox">
          <div className="landingTitle">
            <div className="logoImage" />
            <button className={`startButton ${login ? 'moveRight' : ''}`} onClick={() => setLogin(true)}>
              Get Started
            </button>
            <p className="landingText">
              UniTraffic ensures hassle-free vehicle entry at New Era University by verifying 
              sticker registration and tracking violations with a quick scan.
            </p>
          </div>
          <Login/>
        </div>
      </div>  
    </div>
  );
}

export default App
