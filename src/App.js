import './App.css';
import { Counter } from "./components/Counter";
import { useState } from "react";
import { CarContainer } from "./components/CarContainer";

const ITEMS = [
    {id: 'a1', no: 1},
    {id: 'a2', no: 2},
    {id: 'a3', no: 3},
    {id: 'a4', no: 4},
]

function App() {
  const isLoading = false; // from API
  const [counterStep, setCounterStep] = useState()
  const [isFirstCounterVisible, setIsFirstCounterVisible] = useState(false);
  const [firstCounterName, setFirstCounterName] = useState('Robert')
  const onCountChange = (value) => {
      setCounterStep(value)
  }

  const renderFirstItem = () => {
      if (isFirstCounterVisible) {
          return <Counter name={firstCounterName} no={0} onCountChange={onCountChange} />
      }
  }

  if (isLoading) {
      return <div>Loading...</div>
  }

  return (
    <div className="App">
        <CarContainer />
      <hr />
      Counter in parent: {counterStep}
      <input value={firstCounterName} onChange={event => setFirstCounterName(event.target.value)}/>
      <button onClick={() => setIsFirstCounterVisible(!isFirstCounterVisible)}>Toggle first item</button>
      {renderFirstItem()}
      <br />
      {ITEMS.map(item => <Counter key={item.id} name="Robert" no={item.no} onCountChange={onCountChange} />)}
    </div>
  );
}

export default App;