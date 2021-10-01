new consoleNotifier().startModule("ArcOS.System.contextMenuLogic");

class ContextMenuLogic {

    hideMenu() {
        if (!lockScreenActive) {
            try {
                let contextMenu = document.getElementById("contextMenu");

                contextMenu.style.display = 'block';
                contextMenu.style.opacity = "0";
                contextMenu.style.visibility = "hidden";

                contextMenuLogic.performShowDesktopIconsCheck();

            } catch (e) {

                errorLogic.bsod("ContextMenuLogic.hideMenu: CONTEXT_MENU_INVALID", "The ArcOS context menu module or one of the modules inheriting it couldn't be found.");

            }
        }
    }

    rightClick(e) {
        if (!lockScreenActive) {
            try {

                let contextMenu = document.getElementById("contextMenu"),
                    username = args.get("username");

                contextMenu.style.display = 'block';
                contextMenu.style.opacity = '1';
                contextMenu.style.visibility = "visible";
                contextMenu.style.display = 'block';
                contextMenu.style.left = e.pageX + "px";
                contextMenu.style.top = e.pageY + "px";

                contextMenuLogic.performShowDesktopIconsCheck();

                e.preventDefault();

            } catch (e) {

                errorLogic.bsod("ContextMenuLogic.rightClick: CONTEXT_MENU_INVALID", "The ArcOS context menu module or one of the modules inheriting it couldn't be found.");

            }
        }
    }

    performShowDesktopIconsCheck() {
        let username = args.get("username"),
            lsShowDesktopIcons = localStorage.getItem(`${username}_showDesktopIcons`),
            showDesktopIconsSwitch = document.getElementById("showDesktopIconsSwitch"),
            desktopIcons = document.getElementById("desktopIcons");

        if (lsShowDesktopIcons && lsShowDesktopIcons == '0') {
            showDesktopIconsSwitch.setAttribute('checked', 'false');
            desktopIcons.style.visibility = 'hidden';
        } else {
            showDesktopIconsSwitch.setAttribute('checked', 'true');
            desktopIcons.style.visibility = 'visible';
        }

    }
}

let contextMenuLogic = new ContextMenuLogic();

document.onclick = contextMenuLogic.hideMenu;
document.oncontextmenu = contextMenuLogic.rightClick;