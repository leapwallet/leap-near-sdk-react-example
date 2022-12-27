import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {LeapNearSdk} from '@leapwallet/leap-near-sdk'

function App() {

  const [response, setResponse] = useState<any>('');
  const createWalletUsingRamper = async () => {
    const sdk = await LeapNearSdk.init({ 
      auth_service: 'ramper',
      authConfig: { appName: 'Leap near board',  theme: 'dark'}  
    })
    await sdk?.auth?.connect();
    const signedData =  await sdk?.auth?.getUser();
    setResponse(JSON.stringify(signedData, null, 2));
  }

  const createWalletUsingWeb3auth = async () => {
    const sdk = await LeapNearSdk.init({ 
      auth_service: 'web3auth',
      authConfig: { appName: 'Leap near board',  theme: 'dark'}  
    })

    await sdk?.auth?.connect()
    const signedData =  await sdk?.auth?.getUser();
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
