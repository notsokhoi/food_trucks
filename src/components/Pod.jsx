import CartItem from './CartItem'

const Pod = (props) => {
  console.log(props.coveredTables)
  return (
    <div className="pod" style={{ backgroundImage: `url(${props.podImage})` }}>
      {/* // <div className="pod">
    //   <div src={props.podImage}></div> */}
      <h1>{props.podName}</h1>
      <h3>{props.location}</h3>
      <h3>
        Tables: {props.tables.covered} covered / {props.tables.uncovered}{' '}
        uncovered
      </h3>
      <h3 class="cartHeading">Carts</h3>
      <div className="cartList">
        {props.carts.map((cart) => (
          <CartItem cartName={cart.cartName} />
        ))}
      </div>
      {/* <ul>CartItems should go here</ul> */}
    </div>
  )
}
export default Pod
