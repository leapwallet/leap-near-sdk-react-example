import { LeapNearSdk } from "@leapwallet/leap-near-sdk";


type TokenProps = {
  sdk: LeapNearSdk;
  user: any
}

export const Tokens = ({sdk}: TokenProps) => {
  const fetchTokenList = async () => {
    const tokenList = await sdk?.fetchTokenList();
    console.log(tokenList);
  }
  return (
    <div>
      <h1>Fetch Tokens List</h1>
      <div>
        <button onClick={fetchTokenList}>Fetch token list</button>
      </div>
    </div>
  )

}
