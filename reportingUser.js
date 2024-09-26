const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];
const k = 2;

function updateEachUserMailCount(id_list, notificationList, answer) {
    // update each user mail count
    id_list.forEach(item => {
        const eachUserMailCount = notificationList[item];

        if (eachUserMailCount) answer.push(eachUserMailCount);
        else answer.push(0);
    });
}

function updateMailSendingCount(reportingList, notificationList, k) {
    // compare each number
    for (offender in reportingList) {
        // reporter list for each offeneder
        const reporterListForEachOffender = reportingList[offender];

        // check if offender is reported more than n times
        if (reporterListForEachOffender.length >= k) {
            for (let i = 0; i < reporterListForEachOffender.length; i++) {
                // each user
                const eachUser = reporterListForEachOffender[i];

                // insert default 0 if the value does not exist
                if (!notificationList[eachUser]) notificationList[eachUser] = 0;

                // update notification list
                notificationList[eachUser]++;
            }
        }
    }
}

function updateReportingList(report, reportingList) {
    report.forEach(item => {
        // reporter & offeneder
        const reporter = item.split(" ")[0];
        const offender = item.split(" ")[1];

        // insert default array if it does not exist
        if (!reportingList[offender]) reportingList[offender] = [];

        // push element into array if the reporter didn't report previously
        if (!reportingList[offender].includes(reporter)) reportingList[offender].push(reporter);
    });
}

function solution(id_list, report, k) {
    // condition
    if (id_list.length < 2 || id_list.length > 1000) return;
    if (report.length < 1 || report.length > 200000) return;
    if (k < 1 || k > 200) return;

    // reporting list
    const reportingList = {};

    // update reporting list
    updateReportingList(report, reportingList);

    const notificationList = {};

    // update mail sending count
    updateMailSendingCount(reportingList, notificationList, k);

    let answer = [];
    updateEachUserMailCount(id_list, notificationList, answer);

    return answer;
}

solution(id_list, report, k);