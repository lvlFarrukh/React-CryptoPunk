import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './componets/Header/Header';
import PunkCard from './componets/PunkCard/PunkCard';
import PunkList from './componets/PunkList/PunkList';
import SelectedPunk from './componets/SelectedPunk/SelectedPunk'

function App() {
  const [punkData, setpunkData] = useState()
  const [selectedPunk, setSelectedPunk] = useState()

  useEffect(() => {
    const getNFT = async () => {
      const myPunkData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xbc3c5992e695458AA5Da095542c12916E3F24d4e')
      setpunkData(myPunkData.data.assets)
      setSelectedPunk(myPunkData.data.assets[0])
      console.log(myPunkData.data.assets)
    }

    return getNFT()
  }, [])

  return (
    <div className="App">
      <Header />
      <SelectedPunk selectedPunk={selectedPunk}/>
      <hr />
      <PunkList setSelectedPunk={setSelectedPunk} punkData={punkData}/>

    </div>
  );
}

export default App;
