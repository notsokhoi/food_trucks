import Pod from './Pod'
// import data from '../data/data.json'

const MainContent = (props) => {
  return (
    <div className="main">
      <ul className="content">
        {props.data.pods.map((pod) => (
          <Pod
            podName={pod.podName}
            podImage={pod.image}
            location={pod.location}
            tables={pod.tables}
            carts={pod.carts}
            // cartName={pod.carts.map((cart) => cart.cartName)}
            // I tried adding cartName here it here and it didn't work
          />
        ))}
      </ul>
    </div>
  )
}

export default MainContent
