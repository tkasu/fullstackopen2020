type Operation = 'multiply' | 'add' | 'divide';

type Result = number;

const calculator = (a: number, b: number, op: Operation): Result => {
    switch(op) {
        case 'multiply':
            return a * b;
        case 'add':
            return a + b;
        case 'divide':
            if (b === 0) throw new Error('Can\'t divide by zero!');
            return a / b;
        default:
            throw new Error("Operation type not allowed.")
        }  
  }
  
const res = calculator(2, 1, 'divide');
console.log(res)

console.log(process.argv)