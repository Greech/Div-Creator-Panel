var temporaryDiv = new newDiv();
var divTable = [];

function newDiv(LocationX1, LocationY1, LocationX2, LocationY2) {
    this.LocationX1 = LocationX1;
    this.LocationY1 = LocationY1;
    this.LocationX2 = LocationX2;
    this.LocationY2 = LocationY2;
}

window.onload = function(e) {
    document.getElementById("row").onmouseup = mouseMoveUp;
    document.getElementById("row").onmousedown = mouseMoveDown;
    document.addEventListener("keydown", function(event) {
        if (event.which === 17) {
            document.addEventListener("keydown", function(event) {
                if (event.which === 90) {
                    console.log('a');
                    divTable.pop();
                    console.log(divTable);
                }
            });
        }
    })
}

function listenToTheKey(e) {
    console.log(e.keyCode)
}

function mouseMoveDown(ev) {
    ev = ev || window.event;
    var mousePos = mouseCoords(ev);
    var x = mousePos.x - Math.round((window.innerWidth - 800) / 2);
    var y = mousePos.y - Math.round((window.innerHeight - 800 - 80));
    document.getElementById("coords").innerHTML = "X: " + x + " Y: " + y;

    temporaryDiv.LocationX1 = x;
    temporaryDiv.LocationY1 = y;
}

function mouseMoveUp(ev) {
    var createdDiv = document.createElement("div");
    createdDiv.className = "created-div";

    ev = ev || window.event;
    var mousePos = mouseCoords(ev);
    var x = mousePos.x - Math.round((window.innerWidth - 800) / 2);
    var y = mousePos.y - Math.round((window.innerHeight - 800 - 80));
    document.getElementById("coords").innerHTML = "X: " + x + " Y: " + y;

    temporaryDiv.LocationX2 = x;
    temporaryDiv.LocationY2 = y;

    temporaryDiv.widthX = Math.abs(temporaryDiv.LocationX1 - temporaryDiv.LocationX2);
    temporaryDiv.heightY = Math.abs(temporaryDiv.LocationY1 - temporaryDiv.LocationY2);

    createdDiv.style.width = temporaryDiv.widthX + "px";
    createdDiv.style.height = temporaryDiv.heightY + "px";
    createdDiv.style.left = temporaryDiv.LocationX1 + "px";
    createdDiv.style.top = temporaryDiv.LocationY1 + "px";

    divTable.push(temporaryDiv);
    createdDiv.className = "created-div div-nr-" + divTable.length;
    document.getElementById("row").appendChild(createdDiv);
    console.log(divTable);
}

function mouseCoords(ev) {
    if (ev.pageX || ev.pageY) {
        return { x: ev.pageX, y: ev.pageY };
    }
    return {
        x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
        y: ev.clientY + document.body.scrollTop - document.body.clientTop
    };
}
