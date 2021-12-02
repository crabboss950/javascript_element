// 1. string
console.log('my' + 'cat');
console.log('1'+2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. 숫자연산
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. 증가, 감소 !! 조금 헷갈림
let counter = 2;
const preincrement = ++counter; // counter = counter + 1 이랑 같음
console.log(`preincrement: ${preincrement}, counter: ${counter}`);

const postincrement = counter++; // 먼저 couter 값을 변수postincrement에 할당한 다음에 +1 씩 증가한다.
console.log(`postincrement: ${postincrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. 할당하는 계산자
let x = 3;
let y = 6;
console.log(x += y); // x = x+y;
console.log(x -= y); // x = x-y;
console.log(x *= y); // x = x*y;
console.log(x /= y); // x = x/y;

// 5. 비교하는 연산자
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. or, and, not 연산자
const value1 = true;
const value2 = 4 < 2;

// || (or), 처음으로 참이 나오면 멈춘다 -> 연산이 많은 함수 등을 뒤에 둔다
console.log(`or: ${value1 || value2 || check()}`);

// && (and), 처음으로 거짓이 나오면 멈춘다 -> 연산이 많은 함수 등을 뒤에 둔다
console.log(`and: ${value1 && value2 && check()}`);

// function check() {
//     for (let i = 0; i < 10; i++) {
//       //wasting time
//       console.log('😱');
//     }
//     return true;
//   }

// ! (not) 참 <-> 거짓 서로 바꿀수 있다.
console.log(!value1);


// 7. 동등부호(==, ===)
// == : 타입을 신경 안씀
// === : 타입을 신경 씀, 왠만하면 이걸써서 검사하는게 편하다.
// 같은 ref (레퍼런스)값을 가지고 있는지 확인하는것!
// 예제) 동명이인 20살 쫑
const jjong1 = {name: 'jjong', age: 20};
const jjong2 = {name: 'jjong', age: 20};
const jjong3 = jjong1;
console.log(jjong1 == jjong2); 
console.log(jjong1 === jjong2);
console.log(jjong1 === jjong3);


// 8. if 가정문
const name = 'df';
if (name === 'jjong') {
  console.log('Welcome, jjong!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

// 8-1. if를 간단하게 참이면 왼쪽, 거짓이면 오른쪽 실행
console.log(name === 'jjong' ? 'yes' : 'no');

// 8-2. switch 는 ~~ 일때는 ~~을 실행하라
const browser = 'chrome';
switch (browser){
    case 'IE':
        console.log('나는 아이이입니다.');
        break;
    case 'chrome':
        console.log('나는 크롬입니다.');
        break;
    case 'firefox':
        console.log('나는 파이어폭스입니다.');
        break;
    default:
        console.log('모르겠습니다.');
        break;
}

// 9. 반복문 while
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// 9-1. do while => 먼저 실행한 다음 와일문 블록을 먼저 실행하고 싶을때
do {
    console.log(`do while: ${i}`);
    i--;
  } while (i > 0);


//  10. for loop, for(begin; condition; step)
for (i = 3; i>0; i--){
    console.log(`for:${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
  }

// 11. nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      console.log(`i: ${i}, j:${j}`);
    }
  }

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(`q1. ${i}`);
  }
  
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
if (i > 8) {
    break;
}
console.log(`q2. ${i}`);
}