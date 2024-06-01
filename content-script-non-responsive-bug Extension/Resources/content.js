async function sendMessageAndHandleResponse() {
    console.log(new Date().toISOString());
    const randomJSONData = await chrome.runtime.sendMessage("Ping");

    console.log({ randomJSONData });
}

setInterval(sendMessageAndHandleResponse, 1000);