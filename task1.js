const n = Number(process.argv[2]);
const e = Number(process.argv[3]);

function addition(a, b, acc = '', carry = 0) {
  if (!(a.length || b.length || carry)) return acc.replace(/^0+/, '');

  carry = carry + (~~a.pop() + ~~b.pop());
  acc = carry % 10 + acc;
  carry = carry > 9;

  return addition(a, b, acc, carry);
}

function sumStrings(a, b) {
  if (a === '0' && b === '0') return '0';
  return addition(a.split(''), b.split(''));
}

const fun = (num, power) => {
    let a = '0';
    for (let i = 1; i <= num; i++) {
        const newA = i ** power;
        a = sumStrings(a, newA.toString())
        console.log(a);
    }
    return a;
}

fun(n, e);