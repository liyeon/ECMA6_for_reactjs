import { writeLetter, writeMemo } from "./writing_util.mjs";
import mem from "./my_util.mjs"; //하나만 export하기 때문에 이름을 아무거나로 받아와도 된다.
//javascript 로 무언가 import할 수 있다.

console.log("step08_import.js 시작 ");

writeLetter();
writeMemo();

console.log(mem.num);
console.log(mem.name);
mem.sayHello();

console.log("step08_import.js 끝");
//.mjs = 모듈 자바스크립트라는 뜻