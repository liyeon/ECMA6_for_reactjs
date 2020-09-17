//함수에 전달된 인자의 default값을 지정할수있다.
function showInfo(num=0, name="이름", addr="주소"){//<- 파이썬에서 이런 형태로 쓰인다.
    console.log(num+" | "+name+" | "+addr);
}

showInfo();
showInfo(1);
showInfo(1, "김구라");
showInfo(1, "김구라", "노량진");
showInfo(null);//null 로 나옴 - 전달이 됐다고 간주
showInfo(undefined);// 전달이 안됐다고 간주 했기에 기본값으로 나옴

//파이썬에서는 함수를 호출하면서 원하는 값도 전달이 가능하다. 
//showInfo(name="원숭이", num="2", addr="상도동"); 안됨ㅠㅜ, 알아서 찾아가지 않음, 순서대로 들어간다.

//가변 인자
//args 는 배열로 나온다.
//편한 파라미터?라고도 부른다.( Rest Parameter )
function test(...args){
    console.log(args);
}
test();
test(10);
test(10,20);

//Lambda 함수 (한줄짜리 함수)
let sum=(a,b)=>a+b;
/*
    function(a,b){
        return a+b
    } 와 동일
*/
console.log("10+20="+sum(10,20));

// arrow 함수( 화살표 모양으로 만든 함수, Lambda 함수 포함)\
let getArea=function(width, height){
    let result=width*height;
    return result;
}
//=> function 
let getArea2=(width, height)=>{
    let result=width*height;
    return result;
};

//{} 를 생략하면 return 예약어를 생략 할 수 있다. arrow 함수 람다식 
let getArea3=(width, height)=>width*height;

console.log(getArea(10,20));
console.log(getArea2(10,20));
console.log(getArea3(10,20));

let names=["김구라", "해골", "원숭이"];

//배열의 map() 함수를 호출하면서 arrow 함수 전달하기
//배열에 있는 값 만큼 수행된다.
names.map((item, index)=>{
    console.log(item+"|"+index);
});