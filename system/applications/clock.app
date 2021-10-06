<div class="window" id="Clock" onclick="windowLogic.bringToFront(this);">
    <div class="windowTitle" onclick="windowLogic.bringToFront(parentNode);">
        <p class="titleText">Clock</p>
        <button onclick="windowLogic.closewindow(this.parentNode.parentNode);" class="title close"><span class="material-icons">close</span></button>
        <button onclick="windowLogic.minimizeWindow(this.parentNode.parentNode.id);" class="title"><span class="material-icons">minimize</span></button>
    </div>
    <div class="body">
        <div class="clockSidebar">
            <button>Home</button><br>
            <hr>
            <button>Timer</button><br>
            <button>Stopwatch</button><br>
            <button>Clock</button>
        </div>
        <div class="clockMainPage">
            <h1>bruh</h1>
        </div>
    </div>
</div>

<link rel="stylesheet" href="./system/applications/clock.css">