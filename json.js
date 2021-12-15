// json diff 사이트
// json beautifier 포멧을 이쁘게 만들때
// json parser json으로 부터 오브젝트가 어떻게 표기되는지 확인 가능
// json validator 오류를 확인할 수 있는 방법

// 1. object to json
// stringfy
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) =>{
    console.log(`key : ${key}, value: ${value}`);
    // return value;
    return key === 'name' ? 'ellie' : value;
});
console.log(json);


// 2. json to object
// parse

console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key : ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
// console.log(obj.birthDate);