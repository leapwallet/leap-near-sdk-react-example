import React, { useState } from 'react';
import './App.css';
import LeapNearSDKService from './services/LeapNearSDKService';
import { Playground } from './components/Playground';


function App() {

  const [response, setResponse] = useState<any>('');
  const [sdkInstance, setSdkInstance] = useState<any>(null);
  const createWalletUsingRamper = async () => {
    const { sdk, signedData } =  await LeapNearSDKService.openRamper();
    setResponse(JSON.stringify(signedData, null, 2));
    setSdkInstance(sdk);

  }

  const createWalletUsingWeb3auth = async () => {
    const { sdk, signedData } =  await LeapNearSDKService.openWeb3Auth();
    setResponse(JSON.stringify(signedData, null, 2));
    setSdkInstance(sdk);

  }

  return (
    <div className="App">
      <header className="App-header">
        Leap Near SDK Example
      </header>
      <div>
        <div>
          <button onClick={createWalletUsingRamper} value="Create wallet using Ramper"> Create wallet using Ramper </button>
        </div>
        <div>
          <button onClick={createWalletUsingWeb3auth} value="Create wallet using Web3Auth"> Create wallet using Web3Auth </button>
        </div>
      </div>
      <pre style={{ textAlign: 'left', background: '#ededed' }}>
        {response}
      </pre>
      <Playground sdk={sdkInstance} user={ response ? JSON.parse(response) : null}/>
    </div>
  );
}

export default App;
