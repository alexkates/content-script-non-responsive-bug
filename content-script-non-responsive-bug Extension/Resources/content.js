browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(`${new Date().toISOString()}: ${message}`);
});

async function sendMessageAndHandleResponse() {
    try {
        console.log(`${new Date().toISOString()}: Sending message to background script ...`);
        const randomJSONData = await browser.runtime.sendMessage("Ping");
        console.log(`${new Date().toISOString()}: Received response from background script ${JSON.stringify(randomJSONData)}`);
    } catch (e) {
        console.log(e);
    }
}

setInterval(sendMessageAndHandleResponse, 1000);