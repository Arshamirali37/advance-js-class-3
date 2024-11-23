// >> JS Short Crucits
// let name = null 
// let check = name || "Allow"
// console.log(check);

//-------------------------------------------------------------------------------------------------------

//   let a=3
//   let b=2
//   let exp1=false || (true && a+b)
//   let exp2= 10-true+'HELLO'+(5-0)&& false || "Values"
//   let exp3=40-"hello"+2*5||null||'arsh'+10*2
//   console.log(exp3)


// >> Default Parameter
// function sum(a=5 ,b=10){
//     console.log(a+b)
// }
// sum(20,10)


// >> Rest Operator (...rest) 3 dots only for functions.
function sum(a, b, ...rest) {

    let store=0;

    for (var i = 0; i < rest.length; i++) {
        store = rest[i]
    }
    document.write(`Name:${a+b} <br> City:${store}`)
}

sum(prompt('Enter your name'),prompt('Last name'),prompt("Your City"))