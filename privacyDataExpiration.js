const today = "2022.05.19";
const terms = ["A 6", "B 12", "C 3"];
const privacies = ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"];

function setExpirationDate(contractDate, appliedTerm) {
    const year = contractDate.split(".")[0];
    const month = contractDate.split(".")[1];
    const date = contractDate.split(".")[2];

    let yearInt = parseInt(year);
    let monthInt = parseInt(month);
    let dateInt = parseInt(date);

    const monthIncreased = monthInt + appliedTerm;

    // Adjust year and month based on total months
    yearInt += Math.floor((monthIncreased - 1) / 12);
    monthInt = ((monthIncreased - 1) % 12) + 1;

    let dateDecreased = dateInt - 1;

    // Adjust month and year if dateDecreased is less than 1
    if (dateDecreased < 1) {
        dateDecreased = 28; // Since all months have 28 days
        monthInt -= 1;
        if (monthInt < 1) {
            monthInt = 12;
            yearInt -= 1;
        }
    }

    // pad number
    const monthIntPad = monthInt.toString().padStart(2, '0');
    const dateIntPad = dateDecreased.toString().padStart(2, '0');

    // full date
    const fullDate = `${yearInt.toString()}-${monthIntPad}-${dateIntPad}`;

    return fullDate;
}

function solution(today, terms, privacies) {
    if (terms.length < 1 || terms.length > 20) return;
    if (privacies.length < 1 || privacies.length > 100) return;

    // expiration date
    const expirationDateMap = new Map();

    // calculate expiration date
    terms.map(item => {
        const kindOfTerms = item.split(" ")[0];
        const date = item.split(" ")[1];
        const dateInt = parseInt(date);
        // set expiration date map
        expirationDateMap.set(kindOfTerms, dateInt);
    });

    // answer
    let answer = [];

    // calculate expiration period
    privacies.map((item, index) => {
        const contractDate = item.split(" ")[0];
        const term = item.split(" ")[1];

        const todayDateFormat = new Date(today);

        const appliedTerm = expirationDateMap.get(term);

        const expirationDate = setExpirationDate(contractDate, appliedTerm);
        const expirationDateFormat = new Date(expirationDate);

        if (todayDateFormat > expirationDateFormat) answer.push(index + 1);
    });

    return answer;
}

solution(today, terms, privacies);