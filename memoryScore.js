const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [["may", "kein", "kain", "radi"], ["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]];

function solution(name, yearning, photo) {
    if (name.length < 3 || name.length > 100) return;
    if (yearning.length < 3 || yearning.length > 100) return;
    if (photo.length < 3 || photo.length > 100) return;

    const nameScoreMap = new Map();
    // allocate score for each name
    for (let i = 0; i < name.length; i++) {

        // if score does not exist, allocate 0 score
        if (!yearning[i]) {
            nameScoreMap.set(name[i], 0);
            continue;
        }

        // allocate normal score
        nameScoreMap.set(name[i], yearning[i]);
    }

    let answer = [];

    // assign score for each photo
    const lengthOfPhoto = photo.length;
    for (let j = 0; j < lengthOfPhoto; j++) {
        photo[j].map(photoName => {
            let eachScore = nameScoreMap.get(photoName);
            if (eachScore === undefined) eachScore = 0;

            if (answer[j] === undefined) answer[j] = 0;
            answer[j] += eachScore;
        });
    }
    return answer;
}

solution(name, yearning, photo);