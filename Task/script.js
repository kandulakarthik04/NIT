// let arr = [5,4,3,2,1], sum = 0;
// for(let i of arr){
//     sum += i;
// }
// console.log(sum);

// let sum = +prompt("Enter a number : ")
// let sum = 121;
// while(sum>0){
//     let x = sum%10;
//     console.log(x);
//     sum = Math.floor(sum/10);
// }


// let marks = [[10, 20, 30, 40, 50], [10, 20, 30, 40, 50], [10, 20, 30, 40, 50]], sum = 0;
// let i;
// for(let i in marks){
//    let sum = 0;
//    for(let j of marks[i]){
//     sum += j;
//    }
// }
// console.log(`the sum of test ${+i+1} is ${sum}`);


let str = prompt("Enter name : "), str2 = '';
for (let i = 0;i<str.length;i++){
    str2 = str2 + " " + str.charAt(i);
    console.log(str2);
}