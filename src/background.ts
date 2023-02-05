export const authUrl = "https://open-assistant.io/auth/signin"

chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install") {
    chrome.tabs.create({ url: authUrl })
  }
})
