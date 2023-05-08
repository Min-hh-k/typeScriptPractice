// return 반환을 명시적으로 할당 할 수 있다.

function add(num1: number, num2: number) {
  return num1 + num2
}

// void 반환타입
// return 이 없으면 : void 반환

//! 값을 반환하지 않는 함수를 사용하는 경우에는 void
// 에러는 없지만! 아무것도 반환하지 않기 때문에 반환문이 없다 :void
function printResult(num: number) {
  console.log("result : " + num)
}
// ===
function printResult2(num: number) : undefined {
  console.log("result : " + num)
  return
}


// undefined 반환
console.log(printResult(add(5,4)))

// undefined는 TS의 유효한 타입 ,, 에러가 발생안함(잘 안씀)
let value2 : undefined;


//! 타입의 기능을 하는 함수
// let combineValue : Function;

// number 반환 하는 combineValue 함수
let combineValue : (a : number, b: number) => number;
combineValue = add;
console.log(combineValue(1,5)) // 6


// 콜백함수에서도 파라미터의 타입은 정확히 명시하고, 콜백함수타입은 void 어떠한 타입으로 반환 될지 강요 없음

function addAndHandle(n1: number, n2: number , cb : (num : number) => void) {
  const result = n1 + n2;
  cb(result)
}

addAndHandle(10,20,(result) => {
  console.log(result)
})