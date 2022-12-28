import { LeapNearSdk } from "@leapwallet/leap-near-sdk";
import { useState } from "react";
import { Tokens } from './Tokens';
import { NFT } from './NFT';

type PlaygroundProps = {
  sdk: LeapNearSdk;
  user: any
}

export const Playground = ({ sdk, user }: PlaygroundProps) => {
  const [responseToRender, setResponseToRender] = useState<any>('');

  const handleResponse = (response: any) => {
    setResponseToRender(JSON.stringify(response, null, 4));
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <div style={{ width: '50%' }}>
        <h2>Methods</h2>
        <div style={{ textAlign: 'left' }}>
          <Tokens sdk={sdk} user={user} onResponseFetch={handleResponse} />
          <NFT sdk={sdk} user={user} onResponseFetch={handleResponse} />
        </div>

      </div>
      <div style={{ width: '50%' }}>
        <h2>Response</h2>
        <pre style={{ height: '500px', overflowX: 'auto', textAlign: 'left', background: '#ededed', wordWrap: 'break-word' }}>
          {responseToRender}
        </pre>
      </div>
    </div>
  )
}