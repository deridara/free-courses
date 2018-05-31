/* Task 3 */

const sec1 = Number(process.argv[1]);
const sec2 = Number(process.argv[2]);

const secs =  sec1 + sec2;

const hours = (sec) => (sec - sec%3600) / 3600;
const minutes = (sec) => {
    const a = sec - hours(sec)*3600;
    return (a - a%60) / 60;
}
const seconds = (sec) => sec%60;

const word = fun => secs => (str1, str2, str3) => {
    const num = fun(secs);
    if (num > 4 && num < 21) return str3;
    if (num%10 === 1) return str1;
    if (num%10 > 1 && num%10 < 5) return str2;
    return str3;
}

const hoursWord = word(hours)(secs)('час', 'часа', 'часов');
const minutesWord = word(minutes)(secs)('минута', 'минуты', 'минут')
const secondsWord = word(seconds)(secs)('секунда', 'секунды', 'секунд')

const str = `${hours(secs)} ${hoursWord} ${minutes(secs)} ${minutesWord} ${seconds(secs)} ${secondsWord}`;

process.stdout.write(str);

/* Put your code here */ 
// task1 - 8 баллов
// task2 - 0 баллов
// task3 - 0 баллов
