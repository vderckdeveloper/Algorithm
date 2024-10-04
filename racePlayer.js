const participant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"];

function solution(participant, completion) {
    // condition
    if (participant.length < 1 || participant.length > 100000) return;
    if (completion.length !== participant.length - 1) return;

    const completionMap = new Map();

    // construct completion map
    for (let i = 0; i < completion.length; i++) {
        const member = completion[i];
        const completionCount = completionMap.get(member);
        if (completionCount) {
            const addedCount = completionCount + 1;
            completionMap.set(member, addedCount);
        } else {
            completionMap.set(member, 1);
        }
    }

    // exclude all the member who completed race
    const memberLeft = participant.filter(member => {
        const completeMemberCount = completionMap.get(member) || 0;
        if (completeMemberCount > 1) {
            const updatedMemberCount = completeMemberCount - 1;
            completionMap.set(member, updatedMemberCount);
            return false;
        } else if (completeMemberCount === 1){
            completionMap.delete(member);
            return false;
        } else {
            return true;
        }
    });

    const answer = memberLeft[0];
    return answer;

    // this code offers time complexity of k(n)
}

solution(participant, completion);