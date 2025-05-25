import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import ResultsCharts from "./components/ResultsChart/ResultsCharts";

function App() {
  const pricingPromise = fetch('pricingData.json').then(res=>res.json())
  return (
    <>
      <header>
        {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      </header>

      <main>
        <Suspense fallback={<span class="loading loading-spinner loading-xl"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      <ResultsCharts></ResultsCharts>
        
      </main>

    </>
  );
}

export default App;
