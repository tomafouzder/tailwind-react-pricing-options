import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/DaisyNav/Navbar/Navbar'
import PricingOptions from './components/DaisyNav/PricingOptions/PricingOptions'
import { Divide } from 'lucide-react'

const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {


  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main>
        <Suspense fallback={
          <div className='flex justify-center items-center h-screen'>
          <span className="loading loading-bars loading-xl"></span>
          </div>
        }>
          <PricingOptions pricingPromise={pricingPromise} ></PricingOptions>
        </Suspense>
      </main>






    </>
  )
}

export default App
