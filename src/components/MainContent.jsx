import Pod from './Pod'
import CartItem from './CartItem'
import data from '../data/data.json'

const MainContent = () => {
  return (
    <div className="main">
      <ul className="content">
        {data.pods.map((pod) => (
          <Pod name={pod.name} />
        ))}
        {/* add if statement into the above ul as a bonus, but make sure you add the carts first */}
      </ul>
      {/* <ul className="content">
        {data.pods.map((cartItem) => (
          <CartItem name={cartItem.carts.name} />
        ))}
      </ul> */}
    </div>
  )
}

export default MainContent
