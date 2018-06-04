/* Task 1 */
const n = Number(process.argv[2]);
const e = Number(process.argv[3]);

const fun = (num, power) => {
    let a = 0;
    for (let i = 1; i <= num; i++) {
        a = a + i ** power;
    }
    return a;
}

const stringAnswer = String(fun(n, e));

console.log(stringAnswer);
/* Put your code here */
