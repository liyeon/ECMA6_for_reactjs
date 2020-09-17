//variable - 변수
//변수를 선언하는 방법 1 ( 함수 scope )
//function 안에선 선언한건 함수 안에서만 사용 가능하고, if문은 밖에서도 사용 가능하다.
var myName="김구라";

//변수를 선언하는 방법 2 ( {} brace scope )
//함수안에서 선언한건 함수 안에서만 사용 가능하다.
let yourName="원숭이";

if(true){
    var num1=10;
    let num2=20;
}
console.log(num1);
//console.log(num2); //참조 불가능하다.

function test(){
    var num3=30;
}
//console.log(num3); //참조 불가

for(var i=0; i<5; i++){
    console.log(i);
}

console.log(i);


for(let j=0; j<5; j++){
    console.log(j);
}
console.log(j); // 참조 불가 for 문 안에서 선언한건 for 문 안에서만 가능