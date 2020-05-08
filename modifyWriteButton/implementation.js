var modifyWriteButtonApi = class extends ExtensionCommon.ExtensionAPI {
  getAPI(context) {
    return {
      modifyWriteButtonApi: {
        async replaceWriteButton() {
          const { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");
          const { window, document, alert } = Services.wm.getMostRecentWindow("mail:3pane")

          {
            const newToolbarButton = window.MozXULElement.parseXULToFragment(`
              <toolbarbutton id="button-newmsg"
                            type="menu-button"
                            class="toolbarbutton-1"
                            label="Write"
                            tooltiptext="New message">
                <menupopup is="menupopup">
                  <menuitem id="button-newmsg-1"
                            label="New message alternative 1"/>
                  <menuitem id="button-newmsg-2"
                            label="New message alternative 2"/>
                  <menuitem id="button-newmsg-3"
                            label="New message alternative 3"/>
                </menupopup>

              </toolbarbutton>
            `)

            newToolbarButton.querySelector("#button-newmsg-1").addEventListener("command", event => { alert("1"); event.stopPropagation(); })
            newToolbarButton.querySelector("#button-newmsg-2").addEventListener("command", event => { alert("2") })
            newToolbarButton.querySelector("#button-newmsg-3").addEventListener("command", event => { alert("3") })

            const newMsg = document.getElementById("button-newmsg")
            newMsg.parentNode.replaceChild(newToolbarButton, newMsg)
          }

          {
            const newToolbarButton = document.getElementById("button-newmsg")
            newToolbarButton.addEventListener("command", () => alert("0"))
          }
        }
      }
    }
  }
}
