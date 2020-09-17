/*constant - 상수(변하지 않는 값))
let은 값을 새로 수정 할 수 있으나 const는 재할당이 금지된다.
const는 반드시 선언과 동시에 할당이 이루어져야 한다.
const는 let과 마찬가지로 블록 레벨 스코프를 갖는다.

const 예약어를 이용해서 상수 만들기 ( 값이 할당되면 변경 불가 )
*/ 
let pi=3.14;
const PI=3.14;

pi=3.14159;
console.log('pi :'+pi);

//PI=3.14159; // 값 변경 불가
console.log('PI : '+PI);

let nums=[10,20,30,40,50];
nums.push(60);
console.log("let : "+nums);

//배열에 데이터를 추가, 삭제 하는 것은 nums 자체를 수정하는 것이 아니다.
const nums2=[10,20,30,40,50];
//nums2=[] // 이런게 안된다는 것. 새로운 배열의 참조값이 불가한 것
//배열 데이터를 수정 불가한 것은 아니다.
//데이터 추가
nums2.push(60);
//데이터 삭제
nums2.splice(0, 1);
console.log("const : "+nums2);

//안된다는건 참조값에 대한 값 수정이 불가한거고
//object에 저장된 내용 수정 가능 
const mem={num:1, name:"김구라"};
//mem={} //이게 안됨 새로운 오브젝트에 참조값을 넣는거는 불가능하다.
mem.num=2;
mem.name="김리연";

console.log(mem);