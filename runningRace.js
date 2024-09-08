const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];

// solution
function solution(players, callings) {

    if (players.length < 5 || players.length > 50000) return;
    if (callings.length < 2 || callings.length > 1000000) return;

    // Create a map to store the index of each player
    const playerIndexMap = new Map();
    players.forEach((player, index) => {
        playerIndexMap.set(player, index);
    });


    // find called player
    for (let i = 0; i < callings.length; i++) {
        // called player
        const calledPlayer = callings[i];
        // get index
        const currentIndex = playerIndexMap.get(calledPlayer);

        // switch player index
        playerIndexMap.set(players[currentIndex], currentIndex - 1);
        playerIndexMap.set(players[currentIndex - 1], currentIndex);

        // switch rank
        let temp;
        temp = players[currentIndex];
        players[currentIndex] = players[currentIndex - 1];
        players[currentIndex - 1] = temp;
    }

    // answer
    let answer = [...players];
    return answer;
}

solution(players, callings);
