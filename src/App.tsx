import React, { useState } from 'react';
import './App.css';
import LeapNearSDKService from './services/LeapNearSDKService';

function App() {

  const [response, setResponse] = useState<any>('');
  const createWalletUsingRamper = async () => {
    const signedData =  await LeapNearSDKService.openRamper();
    setResponse(JSON.stringify(signedData, null, 2));
  }

  const createWalletUsingWeb3auth = async () => {
    const signedData =  await LeapNearSDKService.openWeb3Auth();
    setResponse(JSON.stringify(signedData, null, 2));
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
      <pre style={{textAlign: 'left', background: '#ededed'}}>
        {response}
      </pre>
    </div>
  );
}

export default App;
