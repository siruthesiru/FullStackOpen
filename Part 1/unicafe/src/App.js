import { useState } from "react";

const Button = ( props ) => (
    <div>
      <button onClick={ props.handleClick }>{ props.text }</button>
    </div>
)

const Stat = ( props ) => (
  <div>
    <p>{ props.text }: { props.count } </p>
  </div>
)

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button handleClick={ handleGood } text="Good" />
      <Button handleClick={ handleNeutral } text="Neutral" />
      <Button handleClick={ handleBad } text="Bad" />

      <h1>Statistics</h1>

      <Stat count={ good } text="Good" />
      <Stat count={ neutral } text="Neutral" />
      <Stat count={ bad } text="Bad" />
    </div>
  )
}

export default App;
