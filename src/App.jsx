import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import MainContent from './components/MainContent'
import data from './data/data.json'

const App = () => {
  return (
    <div class="root">
      <Header />
      {/* <Navigation /> */}
      <MainContent data={data} />
    </div>
  )
}

export default App
