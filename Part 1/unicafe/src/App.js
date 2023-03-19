import { useState } from "react";

const Button = ( props ) => (
  <div 
    style={{
      display:"inline",
      margin: 0 + 1 + 1 + 1
    }}
  >
    <button onClick={ props.handleClick }>{ props.text }</button>
  </div>
)

const Stat = ( props ) => {
  if( props.text === "Positive" ){
    return (
      <div>
        <p>{ props.text }: { props.count }% </p>
      </div>
    )
  }else{
    return (
      <div>
        <p>{ props.text }: { props.count } </p>
      </div>
    )
  }
}

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const [ all, setAll ] = useState(0)
  const [ score, setScore ] = useState(0)
  const [ average, setAverage ] = useState(0)
  const [ positive, setPositive ] = useState(0)

  const scoreValues = {
    good: 1,
    neutral: 0,
    bad: -1
  }

  const updateOtherStats = (scoreType, updatedGood) => {
    const updatedScore = score + scoreType
    setScore(updatedScore)
  
    const updatedAll = all + 1
    setAll(updatedAll);
  
    const averageScore = updatedScore / (all + 1)
    setAverage(averageScore)

    const positiveScore = (updatedGood / updatedAll) * 100
    setPositive(positiveScore)
  }

  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)

    updateOtherStats(scoreValues.good, updatedGood)
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)

    updateOtherStats(scoreValues.neutral, good)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)

    updateOtherStats(scoreValues.bad, good)
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
      <Stat count={ all } text="All" />
      <Stat count={ average } text="Average" />
      <Stat count={ positive } text="Positive" />
    </div>
  )
}

export default App;
