import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);

  function onWeightChange(e){
    setWeight(e.target.value)
  }

  function onHeightChange(e){
    setHeight(e.target.value)
  }

  const output = useMemo(() => {
    const calculateHeight = height / 100;

    let result = ((weight)/ (calculateHeight * calculateHeight)).toFixed(1);

    return result;
  }, [weight, height]);

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className='input-section'>
        <p
          className='slider-output'
        >
          Weight: {weight} kg
        </p>
        <input 
          className='input-slider'
          type='range'
          step='1'
          min='40'
          max='200'
          onChange={onWeightChange}
        />
        <p
          className='slider-output'
        >
          Height: {height} cm
        </p>
        <input 
          className='input-slider'
          type='range'
          min='140'
          max='220'
          onChange={onHeightChange}
        />
      </div>

      <div className='output-section'>
        <p className='output-text'>Your BMI is</p>
        <p className='output'>{output}</p>
      </div>
    </main>
  )
}

export default App
