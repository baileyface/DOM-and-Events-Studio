// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load', function () {
    const takeoffButton = document.getElementById('takeoff');
    const landingButton = document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort');
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');
    const rightButton = document.getElementById('right');
    const leftButton = document.getElementById('left');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const rocket = document.getElementById('rocket');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');

    takeoffButton.addEventListener('click', function () {
        let confirmTakeoff = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (confirmTakeoff) {
            flightStatus.textContent = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.textContent = parseInt(spaceShuttleHeight.textContent) + 10000;
        }
    });

    landingButton.addEventListener('click', function () {
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.textContent = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.textContent = 0;
        resetRocketPosition();
    });

    abortButton.addEventListener('click', function () {
        let confirmAbort = window.confirm('Confirm that you want to abort the mission.');
        if (confirmAbort) {
            flightStatus.textContent = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.textContent = 0;
            resetRocketPosition();
        }
    });

    upButton.addEventListener('click', function () {
        moveRocket('up');
        spaceShuttleHeight.textContent = parseInt(spaceShuttleHeight.textContent) + 10000;
    });

    downButton.addEventListener('click', function () {
        moveRocket('down');
        spaceShuttleHeight.textContent = parseInt(spaceShuttleHeight.textContent) - 10000;
    });

    rightButton.addEventListener('click', function () {
        moveRocket('right');
    });

    leftButton.addEventListener('click', function () {
        moveRocket('left');
    });

    function moveRocket(direction) {
        let rocketStyle = window.getComputedStyle(rocket);
        let currentTop = parseInt(rocketStyle.top);
        let currentLeft = parseInt(rocketStyle.left);
        let shuttleBackgroundStyle = window.getComputedStyle(shuttleBackground);
        let shuttleBackgroundHeight = parseInt(shuttleBackgroundStyle.height);
        let shuttleBackgroundWidth = parseInt(shuttleBackgroundStyle.width);
        let rocketHeight = rocket.offsetHeight;
        let rocketWidth = rocket.offsetWidth;

        switch (direction) {
            case 'up':
                if (currentTop > 0) {
                    rocket.style.top = (currentTop - 10) + 'px';
                }
                break;
            case 'down':
                if (currentTop < shuttleBackgroundHeight - rocketHeight) {
                    rocket.style.top = (currentTop + 10) + 'px';
                }
                break;
            case 'right':
                if (currentLeft < shuttleBackgroundWidth - rocketWidth) {
                    rocket.style.left = (currentLeft + 10) + 'px';
                }
                break;
            case 'left':
                if (currentLeft > 0) {
                    rocket.style.left = (currentLeft - 10) + 'px';
                }
                break;

        }
    }

    function resetRocketPosition() {
        rocket.style.top = '0px';
        rocket.style.left = '0px';
    }
});