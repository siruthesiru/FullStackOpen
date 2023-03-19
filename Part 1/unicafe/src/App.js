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

const StatisticLine = ( props ) => {
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

const Statistics = ( props ) => {
  if ( props.stats[3].count === 0 ) {
    return (
      <div>
        <p>No feedback given.</p>
      </div>
    )
  }else{
    return (
      <div>
        <StatisticLine text={ props.stats[0].text } count={ props.stats[0].count }/>
        <StatisticLine text={ props.stats[1].text } count={ props.stats[1].count }/>
        <StatisticLine text={ props.stats[2].text } count={ props.stats[2].count }/>
        <StatisticLine text={ props.stats[3].text } count={ props.stats[3].count }/>
        <StatisticLine text={ props.stats[4].text } count={ props.stats[4].count }/>
        <StatisticLine text={ props.stats[5].text } count={ props.stats[5].count }/>
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

  const stats = [
    { text : "Good", count : good },
    { text : "Neutral", count : neutral },
    { text : "Bad", count : bad },
    { text : "All", count: all },
    { text : "Average", count: average },
    { text : "Positive", count: positive }
  ]

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button handleClick={ handleGood } text="Good" />
      <Button handleClick={ handleNeutral } text="Neutral" />
      <Button handleClick={ handleBad } text="Bad" />

      <h1>Statistics</h1>

      <Statistics stats={ stats } />
    </div>
  )
}

export default App;
