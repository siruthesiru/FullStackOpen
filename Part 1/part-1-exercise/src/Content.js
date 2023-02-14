import Part from './Part.js'

const Content = (props) => {
    return (
        <div>
            <Part partName = {props.parts[0].name} exerciseNumber = {props.parts[0].exercises} />
            <Part partName = {props.parts[1].name} exerciseNumber = {props.parts[1].exercises} />
            <Part partName = {props.parts[2].name} exerciseNumber = {props.parts[2].exercises} />
        </div>
    )
}

export default Content