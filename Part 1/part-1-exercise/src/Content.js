import Part from './Part.js'

const Content = (props) => {
    return (
        <div>
            <Part partName = {props.part1} exerciseNumber = {props.exercises1} />
            <Part partName = {props.part2} exerciseNumber = {props.exercises2} />
            <Part partName = {props.part3} exerciseNumber = {props.exercises3} />
        </div>
    )
}

export default Content