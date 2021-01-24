interface MultiplyValues {
  value1: number;
  value2: number;
}

const parseArguments = (args: Array<string>): MultiplyValues => {
  if (args.length < 4 ) throw new Error('Not enough arguments');
  if (args.length > 4 ) throw new Error('Too many arguments');
  
  const value1: number = Number(process.argv[2]);
  const value2: number = Number(process.argv[3]);
  if (!isNaN(value1) && !isNaN(value2)) {
    return {
      value1,
      value2
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText,  a * b);
}

try {
  const {value1, value2} = parseArguments(process.argv);
  multiplicator(value1, value2, `Multiplied numbers ${value1} and ${value2}, the result is:`);
} catch(e) {
  console.log('Error: ', e.message);
}

