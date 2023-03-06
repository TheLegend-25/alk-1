export const Car = (props) => {
    return <div>{props.name} <button onClick={() => props.onHide(props.name)}>Hide</button></div>
  }