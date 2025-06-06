import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react';
import spinningLogo from './assets/FractoscopicIcon.png'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './App.css'

function App() {
  const [value, setSliderValue] = useState(20);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

    return (
    <>
      <div
        style={{
          animation: `logo-spin ${value}s linear infinite`,
        }}>
        <a href="https://fractoscopicvisions.com" target="_blank">
          <img src={spinningLogo} className="logo spin" alt="React logo" />
        </a>
      </div>
      <h1>Stare at the spinning thing!</h1>
      <p className="read-the-docs">
        Click on it to learn more
      </p>
      <Slider 
        className="slider"
        min={0.25}
        max={20}
        step={0.25}
        defaultValue={20}
        reverse={true}
        value={value}
        onChange={handleSliderChange}
      />
      <Analytics />
    </>
  )
}

export default App
