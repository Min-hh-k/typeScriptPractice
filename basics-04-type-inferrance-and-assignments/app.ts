function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!');
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

//! 변수에 타입 지정 ,, 올바른 형식이 아니면 에러
let number1: number = 5;

// number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
