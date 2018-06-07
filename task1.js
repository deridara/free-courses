const n = Number(process.argv[2]);
const e = Number(process.argv[3]);

const fun = (num, power) => {
    let a = 0;
    for (let i = 1; i <= num; i++) {
        a += i ** power;
        console.log('simple alg: ', a);
    }
    return a;
}

console.log(fun(n, e));