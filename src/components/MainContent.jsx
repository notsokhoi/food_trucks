import Pod from './Pod'
import data from '../data/data.json'

const MainContent = () => {
  return (
    <div className="main">
      <ul className="content">
        {data.pods.map((pod) => (
          <Pod
            podName={pod.podName}
            // cartName={pod.carts.map((cart) => cart.cartName)}
          />
        ))}
      </ul>
    </div>
  )
}

export default MainContent
