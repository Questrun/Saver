function onGot(tabInfo) {
let downloadUrl=tabInfo[0].url;
  console.log(downloadUrl);
  let downloading = browser.downloads.download({
    url : downloadUrl,
    conflictAction : 'uniquify'
  });
  downloading.then(onStartedDownload, onFailed);
}
function onError(error) {
  console.log(`Error: ${error}`);
}
function onStartedDownload(id) {
  console.log(`Started downloading: ${id}`);
}
function onFailed(error) {
  console.log(`Download failed: ${error}`);
}
function getPage(){
let gettingCurrent = browser.tabs.query({ currentWindow: true, active: true });
//window.top.location.href;
//browser.tabs.getCurrent();
console.log('something');
gettingCurrent.then(onGot, onError);
//console.log(gettingCurrent);
console.log('still running');
}
browser.browserAction.onClicked.addListener(getPage);
