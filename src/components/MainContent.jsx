import Pod from './Pod'
import Cart from './CartItem'
import data from '../data/data.json'

const MainContent = () => {
  return (
    <div className="main">
      <ul className="content">
        {data.pods.map((pod) => (
          <Pod name={pod.name} />
        ))}
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
