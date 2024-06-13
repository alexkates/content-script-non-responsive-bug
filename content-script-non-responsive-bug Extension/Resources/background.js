browser.runtime.onMessage.addListener(handleMessage);
browser.tabs.onActivated.addListener(handleActivated);

async function fetchRandomJSONData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  return await response.json();
}

function handleMessage(request, sender, sendResponse) {
  console.log(`Received message from content script: ${request} from tab: ${sender.tab.url}`);

  return fetchRandomJSONData();
}

function handleActivated(activeInfo) {
  console.log(`Tab activated: ${activeInfo.tabId}`);
  browser.tabs.sendMessage(activeInfo.tabId, "Tab Activated!");
}