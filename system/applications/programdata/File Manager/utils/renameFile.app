<div class="window" id="File Manager - Rename File" onclick="bringToFront(this);" style="resize:none;width:fit-content;height:fit-content;min-width:unset;min-height:unset;">
    <div class="windowTitle" onclick="bringToFront(parentNode);">
        <p>File Manager - Rename File</p>
        <button onclick="closewindow(this.parentNode.parentNode);" class="title close">✖</button>
        <button onclick="minimizeWindow(this.parentNode.parentNode.id);" class="title">🗕</button>
    </div>
    <div class="body" onclick="bringToFront(parentNode);" style="padding:20px;">
        <p style="margin-bottom:5px;">Enter the name of the file you wish to rename (with extension):</p>
        Old Filename: <input style="padding-top:10px;padding-bottom:10px;width:100%;min-width:500px;" id="fileExplorerRenameFileOldNameInput"><br> New Filename: <input style="padding-top:10px;padding-bottom:10px;width:100%;min-width:500px;" id="fileExplorerRenameFileNewNameInput">
        <br>
        <button onclick="renameFile(fileExplorerCurrentDir,document.getElementById('fileExplorerRenameFileOldNameInput').value,document.getElementById('fileExplorerRenameFileNewNameInput').value);">Rename</button>
    </div>
</div>