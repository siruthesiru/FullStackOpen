const Header = (props) => (
  <div>
    <h1>{props.course}</h1>
  </div>
)

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  )
}

const Content = (props) => (
  <div>
    <Part part={props.part[0]} />
    <Part part={props.part[1]} />
    <Part part={props.part[2]} />
  </div>
)

const Total = (props) => (
  <div>
    <p>
      Number of exercises: {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}
    </p>
  </div>
)

const App = () => {
  const course = {
    name: 'Half-Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      
      <Content part={course.parts} />

      <Total part={course.parts} />
    </div>
  )
}

export default App