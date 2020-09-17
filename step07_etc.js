/*
    setter, getter 메소드
*/

class MemberDto{
    set name(name){
        this._name=name;
    }
    get name(){
        return this._name+"님";
    }
    set num(num){
        //set, get 둘 다 개입할여지가 있다.
        this._num=num*10;
    }
    get num(){
        return this._num;
    }
}

let mem1=new MemberDto();
//내부적으로 setter 메소드가 호출된다.
//값을 집어 넣을 떄 내부적으로 setter 메소드가 호출되면서 집어넣어진다.
mem1.num=1;
mem1.name="김구라";

//내부적으로 getter 메소드가 호출된다. 
console.log(mem1.num);
console.log(mem1.name);