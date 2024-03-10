const Course = ({course}) => {
    return(
      <>
        <Header name = {course.name}/>
        <Content parts = {course.parts} />
        <Total parts = {course.parts} />
      </>
    )
}
const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0)

  return <strong>total of {total} exercises</strong>;
}


const Header = ({name}) => {
      return <h2>{name}</h2>
}

const Content = ({parts}) => {
  return(
    <div>
      {parts.map((part) => ( 
        <Part key={part.id} name={part.name} exercises={part.exercises} />))}
    </div>
  )
}

const Part = ({name , exercises}) => {
      return <p>{name} {exercises} </p>
}


export default Course