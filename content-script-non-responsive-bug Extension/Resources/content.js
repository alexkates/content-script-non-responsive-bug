async function sendMessageAndHandleResponse() {
    try {
        const randomJSONData = await browser.runtime.sendMessage("Ping");

        console.log(`${new Date().toISOString()}: ${JSON.stringify(randomJSONData)}`);
    } catch (e) {
        console.log(e);
    }
}

setInterval(sendMessageAndHandleResponse, 1000);

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(`${new Date().toISOString()}: ${message}`);
});