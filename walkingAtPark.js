const park = ["SOO", "OXX", "OOO"];
const routes = ["E 2", "S 2", "W 1"];

function solution(park, routes) {
    // condition
    if (park.length < 3 || park.length > 50) return;
    if (routes.length < 1 || routes.length > 50) return;

    // initial position of a dog
    let initialPositionX;
    let initialPositionY;

    // initial position
    park.map(
        (item, index) => {
            // condition
            if (item.length < 3 || item.length > 50) return;

            const boolean = item.includes('S');
            if (boolean) initialPositionX = item.indexOf('S');
            if (boolean) initialPositionY = index;
        }
    );

    const obstaclePositionList = [];

    // Identify obstacle positions (X) and store them in the map
    park.forEach((item, index) => {
        for (let i = 0; i < item.length; i++) {
            if (item[i] === 'X') {
                obstaclePositionList.push({ x: i, y: index });
            }
        }
    });

    // position to move 
    routes.map(item => {
        // east
        if (item.includes('E')) {
            const moveEast = item.replace('E', '').trim();

            for (let i = 0; i < moveEast; i++) {
                let copiedPositionX = initialPositionX + (i + 1);
                let copiedPositionY = initialPositionY;

                // Check if out of bounds
                if (copiedPositionX >= park[0].length) return;

                const isRouteBlocked = obstaclePositionList.find(item => item.x === copiedPositionX && item.y === copiedPositionY);
                if (isRouteBlocked) return;

                if (!isRouteBlocked && i === moveEast - 1) {
                    initialPositionX += parseInt(moveEast);
                }
            }
        }

        // west
        if (item.includes('W')) {
            const moveWest = item.replace('W', '').trim();

            for (let i = 0; i < moveWest; i++) {
                let copiedPositionX = initialPositionX - (i + 1);
                let copiedPositionY = initialPositionY;

                // Check if out of bounds
                if (copiedPositionX < 0) return;

                const isRouteBlocked = obstaclePositionList.find(item => item.x === copiedPositionX && item.y === copiedPositionY);
                if (isRouteBlocked) return;

                if (!isRouteBlocked && i === moveWest - 1) {
                    initialPositionX -= parseInt(moveWest);
                }
            }
        }

        // south
        if (item.includes('S')) {
            const moveSouth = item.replace('S', '').trim();

            for (let i = 0; i < moveSouth; i++) {
                let copiedPositionX = initialPositionX;
                let copiedPositionY = initialPositionY + (i + 1);

                // Check if out of bounds
                if (copiedPositionY >= park.length) return;

                const isRouteBlocked = obstaclePositionList.find(item => item.x === copiedPositionX && item.y === copiedPositionY);
                if (isRouteBlocked) return;


                if (!isRouteBlocked && i === moveSouth - 1) {
                    initialPositionY += parseInt(moveSouth);
                }
            }
        }

        // north
        if (item.includes('N')) {
            const moveNorth = item.replace('N', '').trim();

            for (let i = 0; i < moveNorth; i++) {
                let copiedPositionX = initialPositionX;
                let copiedPositionY = initialPositionY - (i + 1);

                // Check if out of bounds
                if (copiedPositionY < 0) return;

                const isRouteBlocked = obstaclePositionList.find(item => item.x === copiedPositionX && item.y === copiedPositionY);
                if (isRouteBlocked) return;

                if (!isRouteBlocked && i === moveNorth - 1) {
                    initialPositionY -= parseInt(moveNorth);
                }
            }
        }
    });

    let answer = [initialPositionY, initialPositionX];

    return answer;
}

solution(park, routes);