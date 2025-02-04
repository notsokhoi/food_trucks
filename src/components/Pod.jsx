import CartItem from './CartItem'

const Pod = (props) => {
  return (
    <div className="pod">
      <h1>{props.podName}</h1>

      {/* the below class cartName i'm trying to add to CartItem.jsx. hide the code to see at least the list of pods show up*/}
      <ul className="cartList">
        {props.cartNames.map((cart) => (
          <CartItem cartName={cartName} />
        ))}
      </ul>
    </div>
  )
}

export default Pod
