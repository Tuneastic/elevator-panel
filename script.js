document.addEventListener('DOMContentLoaded', function () {
   
    let currentFloorText = document.getElementById('currentFloor');
    currentFloorText.innerText = '1';
    let allFloorButtons = document.getElementById('floorButtonsBox').getElementsByTagName('button');

    function removeGreenBorders() {
        for (let i = 0; i < allFloorButtons.length; i++) {
            allFloorButtons[i].style.borderColor = 'transparent';
        };
    };

    function updateCurrentFloor(targetFloor) {
        let currentFloorText = document.getElementById('currentFloor');
        let currentFloorValue = parseInt(currentFloorText.innerText) || 0;

        if (currentFloorValue === targetFloor) {
            document.getElementById('directionBox').innerHTML = '<img src="https://cdn-icons-png.flaticon.com/128/14026/14026550.png" height="100px" width="100px" >';
            return;
        };

        removeGreenBorders();
        allFloorButtons[targetFloor - 1].style.borderColor = 'green';

        let floorDifference = Math.abs(currentFloorValue - targetFloor);
        let direction;
        if (currentFloorValue < targetFloor) {
            direction = 1; 
        }
        else {
            direction = -1;
        };


        if (direction === 1) {
          document.getElementById('directionBox').innerHTML = '<img src="https://cdn-icons-png.flaticon.com/128/5610/5610930.png" height="100px" width="100px">';
        }
        else {
            document.getElementById('directionBox').innerHTML = '<img src="https://cdn-icons-png.flaticon.com/128/5612/5612000.png" height="100px" width="100px">';
        };
        for (let i = 0; i < floorDifference; i++) {
            setTimeout(function (index) {
                return function () {
                    currentFloorText.innerText = currentFloorValue + direction * (index + 1);
                };
            }(i), 1000 * (i + 1));
        };

        setTimeout(function () {
            currentFloorText.innerText = targetFloor;
            document.getElementById('directionBox').innerHTML = '<img src="https://cdn-icons-png.flaticon.com/128/14026/14026550.png" height="100px" width="100px">';
        }, 1000 * (floorDifference + 1));
    };

    for (let i = 1; i <= 10; i++) {
        document.getElementById('floorButton' + i).addEventListener('click', function (index) {
            return function () {
                updateCurrentFloor(index);
            };
        }(i));
    };

    document.getElementById('openButton').addEventListener('click', function(){
        document.getElementById('directionBox').innerHTML = '<img src="https://cdn-icons-png.flaticon.com/128/14026/14026524.png" height="100px" width="100px">';
        setTimeout(function () {
            document.getElementById('directionBox').innerHTML = '<img src="https://cdn-icons-png.flaticon.com/128/14026/14026550.png" height="100px" width="100px">';
        }, 1000);
    });

    document.getElementById('closeButton').addEventListener('click', function(){
        document.getElementById('directionBox').innerHTML = '<img src="https://cdn-icons-png.flaticon.com/128/14026/14026524.png" height="100px" width="100px">';
        setTimeout(function () {
            document.getElementById('directionBox').innerHTML = '<img src="https://cdn-icons-png.flaticon.com/128/14026/14026550.png" height="100px" width="100px">';
        }, 1000);
    });

    document.getElementById('alarmButton').addEventListener('click', function(){
        document.getElementById('directionBox').innerHTML = '<img src="https://cdn-icons-png.flaticon.com/128/14026/14026814.png" height="100px" width="100px">';
        setTimeout(function () {
            document.getElementById('directionBox').innerHTML = '<img src="https://cdn-icons-png.flaticon.com/128/14026/14026550.png" height="100px" width="100px">';
        }, 1000);
    });
});
