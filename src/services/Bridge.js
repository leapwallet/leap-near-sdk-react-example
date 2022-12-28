const sendResponse = (data) => {
    console.log(data);
    window.ReactNativeWebView && window.ReactNativeWebView.PostMessage(JSON.stringify(data));
}

export default {
    async onReceiveMessage (data = {}) { 
        console.log('received message from webview', data)
        if(data.type === 'async') {
            try {
                const response = await window[data.method].call(data.params)
                sendResponse({ error: null, response })
            }
            catch(e) {
                sendResponse({ error: e })
            }
        }

        else {
            try {
                const response = window[data.method].call(data.params)
                sendResponse({ error: null, response })
            }
            catch(e) {
                sendResponse({ error: JSON.stringify(e) })
            }
        }
        
    }
}