let data=["apple","orange","banana","kiwi"];
// data 배열의 첫번째 두번째 배열은 넘기고 데이터를 받는다.
let [,,fruit1, fruit2]=data;

console.log(fruit1);
console.log(fruit2);

let mem={num:1, name:"김구라", addr:"노량진"};

//object 방에 명시한 이름의 데이터만 저장된다.
let {name,addr}=mem;

console.log(name);
console.log(addr);