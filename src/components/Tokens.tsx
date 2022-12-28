import { LeapNearSdk } from "@leapwallet/leap-near-sdk";
import { useState } from "react";


type TokenProps = {
  sdk: LeapNearSdk;
  user: any;
  onResponseFetch: (response: any) => void;
}

export const Tokens = ({ sdk, user, onResponseFetch }: TokenProps) => {
  const [tokenId, setTokenId] = useState<any>('');
  const fetchTokenList = async () => {
    const tokenList = await sdk?.fetchTokenList(user.address);
    onResponseFetch(tokenList);
  }

  const fetchTokenBalance = async () => {
    if (!tokenId || tokenId === 'near') return;
    const tokenBalance = await sdk?.fetchTokenBalance(tokenId, user.address);
    onResponseFetch(tokenBalance);
  }

  return (
    <div>
      <div>
        <h4>Fetch Tokens List</h4>
        <div>
          <button onClick={fetchTokenList} disabled={!user}>Fetch token list</button>
        </div>
      </div>
      <div>
        <h4>Fetch Token Balance</h4>
        <div style={{ display: 'flex', gap: '10px'}}>
          <div>
            <label htmlFor="token-address">Enter Token address: </label>
            <input type="text" name="token-address" value={tokenId} onChange={(e) => setTokenId(e.target.value)} />
          </div>
          <button onClick={fetchTokenBalance} disabled={!user || !tokenId}>Fetch Balance</button>
        </div>
      </div>

    </div>

  )
}
