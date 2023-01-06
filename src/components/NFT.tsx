import { LeapNearSdk } from "@leapwallet/leap-near-sdk";
import { useRef, useState } from "react";

type NFTProps = {
  sdk: LeapNearSdk;
  user: any;
  onResponseFetch: (response: any) => void;
}

export const NFT = ({ sdk, user, onResponseFetch }: NFTProps) => {
  const [nftContract, setNFTContract] = useState<string>('');
  const [nftTitle, setNFTTitle] = useState<string>('');
  const [nftDescription, setNFTDescription] = useState<any>('');
  const [nftAmount, setNFTAmount] = useState<string>('');
  const [nftMedia, setNFTMedia] = useState<any>(null);
  const [nftStore, setNFTStore] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const nftMediaRef = useRef<any>(null);
  const fetchTokenList = async () => {
    if (!nftContract) return;
    const nfts = await sdk?.fetchNFTs(user.address, nftContract);
    onResponseFetch(nfts);
  }

  const handleNFTMediaUpload = (e: any) => {
    const file = e.target.files[0];
    setNFTMedia(file);
  }
  const isValidInputs = nftTitle && nftDescription && nftAmount && nftMedia && nftStore;

  const handleMintNFT = async () => {
    if (!isValidInputs) return;
    setIsLoading(true);
    const nfts = await sdk?.mintNFT(
      nftStore,
      {
        title: nftTitle,
        description: nftDescription,
        amount: Number(nftAmount),
        file: nftMedia,
      },
      user.address
    );
    onResponseFetch(nfts);
    setIsLoading(false);
  }

  return (
    <div>
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
      <div>
        <h4>Mint NFTs(Mintbase)</h4>
        <div className="margin-bottom-5">
          <label htmlFor="nft-title">Store ContractId: </label>
          <input type="text" name="nft-store" value={nftStore} onChange={(e) => setNFTStore(e.target.value)} />
        </div>
        <div>
          <div>
            <div className="margin-bottom-5">
              <label htmlFor="nft-title">Enter NFT Title: </label>
              <input type="text" name="nft-title" value={nftTitle} onChange={(e) => setNFTTitle(e.target.value)} />
            </div>
            <div className="margin-bottom-5">
              <label htmlFor="nft-description">Enter NFT description: </label>
              <input type="text" name="nft-description" value={nftDescription} onChange={(e) => setNFTDescription(e.target.value)} />
            </div>
            <div className="margin-bottom-5">
              <label htmlFor="nft-amount">Amount of NFT to be minted: </label>
              <input type="number" name="nft-amount" value={nftAmount} onChange={(e) => setNFTAmount(e.target.value)} />
            </div>
            <div className="margin-bottom-5">
              <label htmlFor="nft-media">Upload Media: </label>
              <input
                ref={nftMediaRef}
                type="file"
                name="nft-media"
                accept="image/*"
                onChange={handleNFTMediaUpload}
              />
            </div>
          </div>
          <button onClick={handleMintNFT} disabled={isLoading || !user || !isValidInputs}>Mint NFTs</button>
        </div>
      </div>
    </div>

  )
}
