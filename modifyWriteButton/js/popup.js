// used by popup.html

document.querySelector("#ReplaceWriteButtonBtn").addEventListener("click", async () => {
  await browser.modifyWriteButtonApi.replaceWriteButton()
})
