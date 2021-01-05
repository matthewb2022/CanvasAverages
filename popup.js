/*
injects content.js into active tab on click of button
*/
function injectTheScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: "content.js"});
    });
}

document.getElementById('clickactivity').addEventListener('click', injectTheScript);