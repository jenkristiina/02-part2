import { useEffect, useState } from "react"

const Statistics = (props) => {
  return (
  <button onClick={props.click}>{props.text}</button>
  )
}

const Average = (props) => {
  return (
    <h3>{props.text}{props.value}</h3>
  )
}

const Positive = (props) => {
  return (
    <h3>{props.text}{props.value}%</h3>
  )
}

const Total = ({text, value}) => <p>{text}{value}</p>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [positive, setPositive] = useState(0)
  const [feedback, setFeedback] = useState(false)

  useEffect(() => {
    setPositive(0);
  });

  const total = good + neutral + bad
  const average = total / 3

  const goodClick = () => {
    setGood(good + 1);
    setFeedback(true)
  };


return (
  <div>
  <h1>How was the food?</h1>
    <Statistics click={goodClick} text="Good" />
    <Statistics click={() => {setNeutral(neutral + 1); setFeedback(true)}} text="Ok" />
    <Statistics click={() => {setBad(bad + 1); setFeedback(true)}} text="Bad" />

    {feedback ? (
      <>
  <h2>Statistics</h2>
  <p>Positive: {good}</p>
  <p>Neutral: {neutral}</p>
  <p>Bad: {bad}</p>
    <Total value={total} text="Total: "/>
    <Average value={average} text="Average: " />
    <Positive value={(good / total) * 100} text="Positive: " />
      </>
  ) : (
  <p>No feedback given</p>
  )}


  <h1>How was the food?</h1>
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Positive</th>
          <th>{good}</th>
        </tr>
        <tr>
          <th>Neutral</th>
          <th>{neutral}</th>
        </tr>
        <tr>
          <th>Bad</th>
          <th>{bad}</th>
        </tr>
        <tr>
          <th>Total:</th>
          <th>{total}</th>
        </tr>
        <tr>
          <th>Average:</th>
          <th>{average}</th>
        </tr>
        <tr>
          <th>Positive:</th>
          <th>{(good / total) * 100}%</th>
        </tr>
      </tbody>
   </table>
    {!feedback && <p>No feedback given.</p>}




  </div>
);
};

export default App


/*
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad

  const [positive, setPositive] = useState(0)

  const goodClick = () => {
    setGood(good + 1);
    setPositive(100 * good / total);
  }

  return (
    <div>
      <h1>How was the food?</h1>
      <button onClick={goodClick}>Good!</button>
      <button onClick={() => setNeutral(neutral + 1)}>Ok.</button>
      <button onClick={() => setBad(bad + 1)}>Bad!</button>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {total}</p>
      <h3>Average: {(total) / 3}</h3>
      <p>Positive: {(good / total) * 100}%</p>
    </div>
  )
}

export default App
*/