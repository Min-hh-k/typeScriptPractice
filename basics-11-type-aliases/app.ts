let userInput : unknown;
let userName : string;
// 에러발생 없이 어떤 값이든 저장할 수 있다는 것 === unknown
// any 보다 제한 적

userInput = 5;
userInput = "max"

// unknown 일 때, 타입 지정 해주면 대입 가능,
// 바로 userName = userInput 하면 에러발생
// any 사용 할 때, 타입지정 조건 없이 바로 userName = userInput 대입 가능
// 하지만 그냥 string, number, boolean 이나 쓰자!

if(typeof userInput === 'string') {
  userName = userInput;
}

