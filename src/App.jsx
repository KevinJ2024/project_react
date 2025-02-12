import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [result, setResult] = useState(null)
  const [operation, setOperation] = useState("1")

  const handleCalculate = () => {
    let res
    switch (operation) {
      case "1":
        res = parseFloat(number1) + parseFloat(number2)
        break
      case "2":
        res = parseFloat(number1) - parseFloat(number2)
        break;
      case "3":
        res = parseFloat(number1) * parseFloat(number2)
        break
      case "4":
        res = parseFloat(number1) / parseFloat(number2)
        break
      default:
        res = "Operación no válida"
    }
    setResult(res);
  };

  return (
    <div>
      <h1>Calculadora React</h1>
      <input
        type="number"
        placeholder="Número 1"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Número 2"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="1">Suma</option>
        <option value="2">Resta</option>
        <option value="3">Multiplicar</option>
        <option value="4">Dividir</option>
      </select>
      <button onClick={handleCalculate}>Calcular</button>
      {result !== null && <h2>Resultado: {result}</h2>}
    </div>
  );
}

export default App