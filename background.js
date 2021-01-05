
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        var url = String(tab.url);
        if (url.includes("canvas")){

        
        alert(url);
        
        }
    }
  })
  