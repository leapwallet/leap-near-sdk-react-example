import {LeapNearSdk} from '@leapwallet/leap-near-sdk'

export default {

    async openWeb3Auth() {
        const sdk = await LeapNearSdk.init({ 
            auth_service: 'web3auth',
            authConfig: { appName: 'Leap near sdk example',  theme: 'dark'}  
        })

        await sdk?.auth?.connect()
        const signedData =  await sdk?.auth?.getUser();
        return signedData;
    },

    async openRamper() {
        const sdk = await LeapNearSdk.init({ 
            auth_service: 'ramper',
            authConfig: { appName: 'Leap near sdk example',  theme: 'dark'}  
        })

        await sdk?.auth?.connect()
        const signedData =  await sdk?.auth?.getUser();
        return signedData;
    }  
}