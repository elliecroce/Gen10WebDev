var isMouseTracking = false;

function updateMousePosition(){
    
    if (isMouseTracking) {
        var posX = document.getElementById("mousePositionX");
        posX.innerText = event.clientX;
        var posY = document.getElementById("mousePositionY");
        posY.innerText = event.clientY;
    }
    
}

function toggleTracking() {
    
    isMouseTracking = !isMouseTracking;
    
    if (isMouseTracking) {
        document.getElementById("trackingStatus").innerText = "TRACKING";
    }
    else {
        document.getElementById("trackingStatus").innerText = "NOT TRACKING";
    }
}