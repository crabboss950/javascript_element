'use strict';

// ---------------------------------------------------------------
// Variable 변수
// let : 변수를 선언할 수 있다. mutable 데이터 타입 => 변동될수 있는 타입

let name = 'jong';
console.log(name);
name = 'hello';
console.log(name);

// ---------------------------------------------------------------
// 블록스콥
// 블록 밖에서는 블록 안에 있는 내용들을 볼 수가 없게 된다.
{
    let name = 'jong';
    console.log(name);
    name = 'hello';
    console.log(name); 
}
// 밖에서
// console.log(name); 을 해도 아무 결과가 안나옴

//이와 반대로 글로벌 스콥은
// 다만 메모리를 찾이하기 찾이하기 때문에 너무 막쓰진 말자
let globalscope = '글로벌스콥';
console.log(globalscope);
{
    console.log(globalscope);  
}

// ---------------------------------------------------------------
// contant : 변수를 선언할 수 있다. immutable 데이터 타입 => 변동될수 없는 타입
// 한 번 할당하면 값이 절대 변하지 않는 변수를 만드는 것
// 보안상의 이유로 사용함

const daysInWeek = 7;
const maxNumber = 5;

// ---------------------------------------------------------------
// Variable types
// primitive, single item : number, string, boolean, null, undefiedn, symbol : 하나의 타입
// object, box container : 여러개의 싱글 아이템의 집합  
// function, first-class function : 함수도 하나의 타입
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// 숫자 입력 때문에 에러가 나는 경우
const infinity = 1/0;
const negativeinfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeinfinity);
console.log(nAn);


// ---------------------------------------------------------------
// 문자 입력할때 

// 식별자가 필요할때
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2);
// console.log('')

// 5. 다이나믹 타입
let text = 'hello';
console.log('value: ${text}, type: ${typeof text}');


// 6. 오브젝트 타입
let jjong = {name}