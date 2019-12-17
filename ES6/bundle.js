/*

var arr = [];

for (let i  = 0 ; i< 10 ; i++ ){
    arr[i] = (() => { console.log(i);
    })(i)
}

let x = 2
function fn (x=x){ //x is not defined
     console.log(x); 
}
fn ();


const  sortNum = (...args) => args.sort((a, b) => a -b);


let  insert = (value) => ({
     into: (array) => ({
         after: (afvalue) => {
            array.splice(array.indexOf(afvalue) + 1, 0, value);
             return array
         }
     })
})


let arr = [1, 2, 3, 4];
let iterator = arr[Symbol.iterator]();
iterator.next();





class Person {
    // 'use strict'默认
  constructor($options){//私有属性,实例属性配置
    this.$options.age = $options.age;

  }

  say(){//公有属性,不可枚举

  }

//静态属性
  static a (){//不能实例化
    
}

  //属性私有化

  [_drink](){

  }

  eat(syproty){//公有属性
        sy.call(this,syproty)
  }

}


function sy (syproty){
     return this.bar = syproty;
}

new Person();//function
new Person().eat();


*/
"use strict";
