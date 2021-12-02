'use strict';
// 1. 함수 만들기
function printHello(){
    console.log('hello');
}
printHello()

function text(message){
    console.log(message);
}
text('nice meet you');
text('123456789');

// 2. 파라미터 변경
function changename(obj){
    obj.name = 'coder';
}
const jong = { name: 'jong' };
changename(jong);
console.log(jong);

// 3. 두개의 파라미터
function showMessage(message, from) {
    console.log(`${message} by ${from}`);
  }
  showMessage('Hi!');

function showMessage(message, from) {
    if(from === undefined){
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
  }
  showMessage('Hi!');

function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
    }
    showMessage('Hi!');


// 4. 여러개의 파라미터 => 배열출력
function printAll(...args){
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

function printAll(...args){
    for (const arg of args){
        console.log(args);
    }
}

printAll('dream', 'coding', 'jong')


// 5. 글로벌 scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // 자식은 부모의 메세지 즉 인자값을 확인할 수 있지만
  // 자식안에 정의된 child 메세지는 부모에서는 확인할 수 없다.
}
printMessage();


//6. 함수 리턴
function sum(a, b) {
    return a + b;
  }
  const result = sum(1, 2); // 3
  console.log(`sum: ${sum(1, 2)}`);


// 6-1. 함수에서 리턴을 빨리하고 빨리 함수에서 나가는 방향으로 코딩해라

// 안좋은 예)
function upgradeUser(user) {
    if (user.point > 10) {
      // long upgrade logic...
    }
  }
  
  // 좋은 예)
  function upgradeUser(user) {
    if (user.point <= 10) {
      return;
    }
    // long upgrade logic...
  }


//------------------------------------------------

// print 함수 만드는 방법
const print = function () { 
    console.log('함수출력');
  };
  print();
  // 함수 고대로 가져다 쓰기
  const printAgain = print;
  printAgain();
  const sumAgain = sum;
  console.log(sumAgain(1, 3));

// 7. collback 함수
// 정답과 정답일 때 호출할 함수, 오답일 때 호출할 함수를 전달
// 상황에 맞게 함수를 부르는 것을 콜백함수라고 한다.
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else{
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('yes!');
  };
  
  // named function
  // better debugging in debugger's stack traces
  // recursions
  const printNo = function print() {
    console.log('no!');
  };
  randomQuiz('wrong', printYes, printNo);
  randomQuiz('love you', printYes, printNo);


// arrow 함수 => 함수를 간단하게 만들어주는 함수
const simplePrint = () => console.log('simplePrint!!!');
const add = (a, b) => console.log(a + b);
simplePrint()
add(5, 10)


// IIFE
// 잘 안됨 ㅠㅠ 
// 함수를 선언하고 바로 호출하는 방법은 함수를 ()로 감싸고 
// 마지막에 함수 호출하기 위해 ()를 붙여준다.
(function helloo(){
    console.log('iife');
})();