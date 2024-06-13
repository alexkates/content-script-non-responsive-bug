async function fetchRandomJSONData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  return await response.json();
}

function handleMessage(request, sender, sendResponse) {
  console.log(new Date().toISOString());

  return fetchRandomJSONData();
}

browser.runtime.onMessage.addListener(handleMessage);

function handleActivated(activeInfo) {
  console.log(`Tab ${activeInfo.tabId} was activated`);
  browser.tabs.sendMessage(activeInfo.tabId, "Tab Activated!");
}

browser.tabs.onActivated.addListener(handleActivated);
