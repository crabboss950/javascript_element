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
// string 문자 입력할때 
const char = 'c';
const fullname = 'ha eun jong';
const greeting = 'hello' + fullname;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${fullname}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);


// ---------------------------------------------------------------
// boolean 참 거짓 입력할 때
const canread = true;
const test = 3 < 1 ; // 거짓
console.log(`value: ${canread}, type: ${typeof canread}`);
console.log(`value: ${test}, type: ${typeof test}`);


// ---------------------------------------------------------------
// null 없는 값을 입력할 때
let nothing = null;  // nothing은 비어있는 가지고 있지 않다
console.log(`value: ${nothing}, type: ${typeof nothing}`);


// ---------------------------------------------------------------
// undefined 정의되지 않은 값을 입력할 때
let x ; // 선언은 했지만 아무것도 정의되지 않았다.
// let x = undefined ;  이랑 같은 말
console.log(`value: ${x}, type: ${typeof x}`);


// ---------------------------------------------------------------
// symbol 식별자가 필요할때
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2);

// 심볼은 항상 .description을 넣어야 한다
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)

// ---------------------------------------------------------------
// 다이나믹 타입 -> 선언할 때 어떤 타입인지 선언하지 않고 프로그램이 동작할 때 할당된 값에 따라서 타입이 변경될 수 있음
// 프로토 타입일 때는 유용하지만 협업할 때는 좋지않음!
// 에러 발생이 높음 -> typescript가 나오게 되었다.
let text = 'hello';
console.log(text.charAt(0));  //hello 에서 문자열 0번째 추출
console.log(`value: ${text}, type: ${typeof text}`); // 문자로 출력된다
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // 숫자가 된다 
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // 문자가 된다.
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // 숫자가 된다 
//console.log(text.charAt(0)); 여기서는 text가 숫자로 바뀌었기 때문에 에러가 난다


// ---------------------------------------------------------------
// 오브젝트 타입
// 오브젝트 자체는 변경이 불가능하지만 안에 있는 값은 변경가능하다
let jjong = {name:'은종', age: 20};
jjong.age = 21;