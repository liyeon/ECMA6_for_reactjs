// 배열의 다양한 기능
let nums=[1,2,3,4,5];
//find 함수를 호출하면서 화살표함수를
//find는 배열에 있는 값을

//nums 배열을 처음부터 탐색하면서 가장 첫번째 짝수를 찾아서 리턴
let result=nums.find((x)=>{
    console.log(x);
    return x%2 == 0; //찾으면 리턴 못찾으면 리턴안됨
});
//true인걸 찾을 때 까지 보는 것이다.
console.log("result:"+result);//result:undefined, return true 를 해주면 1이 나옴

let result2=nums.find((x)=>x%2==0);
console.log("result2:"+result2);

// 배열을 탐색하면서 값에 맞는걸 모두 찾아서 새로운 배열을 만들어 준다.
//nums 배열을 처음부터 탐색하면서 짝수만 찾아내서 배열에 담아 리턴
let result3=nums.filter((x)=>x%2==0);
console.log("result2:"+result3);
// concatenate - 이어 붙인다.
//nums 배열에 새로운 아이템을 추가해서 새로운 배열의 참조값 리턴
let result4=nums.concat(6);
let result5=nums.concat([6,7,8,9,10]);
console.log(result4);
console.log(result5);

let names=["김구라"];
let names2=["김구라"];
names.push("원숭이");
//새로운 배열을 만들어서 리턴해준다.
let result6=names2.concat("원숭이");

console.log(names);
console.log(names2);
console.log(result6);