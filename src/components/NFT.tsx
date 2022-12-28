import { LeapNearSdk } from "@leapwallet/leap-near-sdk";
import { useState } from "react";

type NFTProps = {
  sdk: LeapNearSdk;
  user: any;
  onResponseFetch: (response: any) => void;
}

export const NFT = ({ sdk, user, onResponseFetch }: NFTProps) => {
  const [nftContract, setNFTContract] = useState<any>('');
  const fetchTokenList = async () => {
    if (!nftContract) return;
    const nfts = await sdk?.fetchNFTs(user.address, nftContract);
    onResponseFetch(nfts);
  }
  return (
    <div>
      <h4>Fetch NFTs</h4>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div>
          <label htmlFor="nft-contract">Enter NFT contract address: </label>
          <input type="text" name="nft-contract" value={nftContract} onChange={(e) => setNFTContract(e.target.value)} />
        </div>
        <button onClick={fetchTokenList} disabled={!user || !nftContract}>Fetch NFTs</button>
      </div>
    </div>
  )
}
