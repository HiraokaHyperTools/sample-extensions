browser.windows.onCreated.addListener(getEmail);

async function getEmail(window) {
  if (window.type === "messageDisplay") {
    var tabs = await browser.tabs.query({ windowId: window.id });
    var tab = await browser.tabs.get(tabs[0].id);
    var mailHeader = await browser.messageDisplay.getDisplayedMessage(tabs[0].id);
    console.log("mailHeader", mailHeader);
  }
}
