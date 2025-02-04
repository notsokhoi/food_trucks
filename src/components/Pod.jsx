import CartItem from './CartItem'

const Pod = (props) => {
  console.log(props.coveredTables)
  return (
    <div className="pod" style={{ backgroundImage: `url(${props.podImage})` }}>
      {/* // <div className="pod">
    //   <div src={props.podImage}></div> */}
      <h1>{props.podName}</h1>
      <h3>Address: {props.location}</h3>
      <h3>
        Tables: {props.coveredTables} covered / {props.uncoveredTables}
        uncovered
      </h3>

      {/* the below class cartName i'm trying to add to CartItem.jsx. hide the code to see at least the list of pods show up*/}
      {/* <ul className="cartList">
        {props.cartName.map((cartName) => (
          <CartItem cartName={cartName} />
        ))}
      </ul> */}
      {/* <ul>CartItems should go here</ul> */}
    </div>
  )
}
export default Pod
