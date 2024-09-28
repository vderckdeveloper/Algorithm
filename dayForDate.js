const a = 1;
const b = 1;

function solution(a, b) {
    /***
     *  the first day index to add, since the count the day count starts from 1
     *  this is configured to calculate starting point.
     *  for instance, january 1st of 2016 is 'FRI', which means dayOfTheWeek[4 + 1] = 'FRI'
     * */
    const indexToAdd = 4;

    // days for each month
    const daysInMonthLeapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const dayOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    let totalDays = 0;
    // calculate total days up to previos month
    for (let i = 0; i < a - 1; i++) {
        totalDays += daysInMonthLeapYear[i];
    }

    // calculate total days for the month
    totalDays += b;

    // reflect index to add
    totalDays += indexToAdd;

    // calculate remainder
    const remainder = totalDays % 7;
    
    const answer = dayOfTheWeek[remainder];
    return answer;
}

solution(a, b);