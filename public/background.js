// Background script for the extension
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

// Handle messages from content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GET_MOVIES') {
    // Handle movie data requests
    sendResponse({ success: true });
  }
  return true;
}); 