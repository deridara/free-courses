const num = Number(process.argv[2]);
const power = Number(process.argv[3]);

class LongNumbers{
    constructor(num) {
        this.arr = num.toString().split('');
        return this;
    };
    
    addition(a, b, acc = '', carry = 0) {
        if (!(a.length || b.length || carry)) {
            const result = acc.replace(/^0+/, '');
            return new LongNumbers(result);
        }

        carry = carry + (~~a.slice().pop() + ~~b.slice().pop());
        acc = carry % 10 + acc;
        carry = carry > 9;

        return this.addition(a.slice(0, -1), b.slice(0, -1), acc, carry);
    };
    
    add(b) {
        if (!(this.arr.toString().replace(/^0+/, '') || b.arr.toString().replace(/^0+/, ''))) return new LongNumbers(0);
        return this.addition(this.arr, b.arr);
    };
    
    multiply(a, b, res = new LongNumbers(0), digit = 0) {
        if (!(b.length)) return res;
        if (b.slice().pop() === '0') return this.multiply(a, b.slice(0, -1), res, digit + 1);
        let acc = '', carry = 0;
        for (let i = a.length - 1; i >=0; i--) {
            
            carry = carry + (~~a[i] * ~~b.slice().pop());
            acc = carry % 10 + acc;
            carry = Math.floor(carry/10);
        }
        const stringRes = `${carry}${acc}`.replace(/^0+/, '')
        const stepRes = new LongNumbers(stringRes);
        const sumRes = res.add(stepRes.addZeros(digit));
        return this.multiply(a, b.slice(0, -1), sumRes, digit + 1);
    }
    
    mult(b) {
        if (!(this.arr.toString().replace(/^0+/, '') && b.arr.toString().replace(/^0+/, ''))) return new LongNumbers(0);
        return this.multiply(this.arr, b.arr);
    }
    
    toPower(power) {
        let acc = new LongNumbers(1);
        for (let i = 0; i < power; i++) {
            acc = acc.mult(this);
        }; 
        return acc;
    }
    
    addZeros(digit) {
        for (let i = 0; i < digit; i++ ) {
            this.arr.push('0');
        }
        return this;
    }
    
    toString() {
        return this.arr.join('');
    }  
}

const f = (num, power) => {
    let longN = new LongNumbers(0);
    for (i = 1; i <= num; i++) {
        const addition = new LongNumbers(i).toPower(power);
        longN = longN.add(addition);
    }
    return longN.toString();
}

console.log(f(num, power));