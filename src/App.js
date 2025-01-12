import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  )
}


function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState();
  const [percentage2, setPercentage2] = useState();

  const tip = bill * (percentage1 + percentage2) / 2 / 100;

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <ServicePercentage percentage={percentage1} onSelect={setPercentage1} >How did you like the service? </ServicePercentage>
      <ServicePercentage percentage={percentage2} onSelect={setPercentage2} > How did your friend like the service?</ServicePercentage>
      {bill > 0 &&
        <>
          <Output bill={bill} tip={tip}></Output>
          <Reset onReset={handleReset}></Reset>
        </>}
    </div>
  )
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => { onSetBill(Number(e.target.value)) }}
      >

      </input>
    </div>
  )
}

function ServicePercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={e => onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  )
}
function Output({ bill, tip }) {
  return <h3>You pay {bill + tip} ( ${bill} + ${tip} tip)</h3>
}

function Reset({ onReset }) {
  return <button onClick={onReset} >Reset</button>
}

