# Content Script Messaging Background Script Bug

A minimal-reproducable example of a Safari Web Extension bug I've run into where the non-persistant background script seems to crash after 30 seconds even when the content script is messaging it.

## Steps to Reproduce

1. Clone this repo
2. Open in Xcode and run targeting a physical device
3. Open Safari on the device and enable the extension
4. Open a new tab and navigate to `https://www.google.com`
5. From your Mac, open the Safari Web Inspector and navigate to the extension's background page
6. You will see messages being sent from the content script to the background script every 1 second
7. After 30 seconds, the background script will stop receiving messages. Trying to use the console to interact with the background script, e.g., typing `console.log("hello")` will show that it is no longer responsive.

## Other Notes

1. This issue does not occur when running the extension in the simulator
