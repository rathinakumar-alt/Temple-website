import { useState } from 'react'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import TempleInformation from './components/Infos/TempleInformation'
import DivineHeritage from './components/DivineHeritage/DivineHeritage'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <TempleInformation />
      <DivineHeritage />
      <div className="container">
        {/* Main content will go here */}
      </div>
      <Footer />
    </>
  )
}

export default App
