async function fetchRandomJSONData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  return await response.json();
}

function handleMessage(request, sender, sendResponse) {
  console.log(new Date().toISOString());

  return fetchRandomJSONData();
}

browser.runtime.onMessage.addListener(handleMessage);