// bài 4

// console.log(`1. ${age}`); // undifine
// var age = 20;
// console.log(`2. ${age}`); //age = 20

// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995"
// console.log(`3. ${calAge(yearOfBirth)}`)
// // Function declaration
// function calAge(year) {
// return 2022 - year;
// }
// console.log(`4. ${calAge(yearOfBirth)}`) // 27

// console.log(`5. ${getFullName(firstName, lastName)}`);//undifine
// // Function expression
// var getFullName = function(firstName, lastName) {
// return `${firstName} ${lastNAme}`;
// }
// console.log(`6. ${getFullName(firstName, lastName)}`);// peter paker

// // bài  5 

// console.log(age); //undifine

// let age = 27;

// console.log(age) // age = 27

// {
// console.log(firstName); // undifine

// console.log(age); // undifine
// console.log(age); // undìine

// let firstName = "Peter";
// let lastName = "Parker";
// const job = "Spider man";

// console.log(firstName); // peter 

// console.log(lastName); //paker
// console.log(job); //spider man
// }

// // bài 6 
// a = 2;
// var a;
// console.log( a ); //a = 2

// //bài 7 

// console.log( a ); // undifine
// var a = 2;

// //bài 8
// console.log() // undifine
//  var a = 10;
// function foo() {
// var a;
// console.log( a ); //a= 10
// a = 2;
// }
// foo();

//bài 11 
// let arr = [1,2,3,4,5,6];
// let n1 = prompt("nhập số");
// function removeEnd(arr, n) {

//    for(let i = 1; i<= n ; i++){
//     arr.pop()
//    }return arr
// }console.log( removeEnd(arr , n1));

// //bài  12
// let arr = [1,2,3,4,5,6,7];
// let b = prompt("nhập số phần tử muốn in ra");
// var arr1 =[];
// function first(arr, n) {
//     for(let i = 0; i<n; i++){
//         arr1.push(arr[i]);
//     }return arr1
// }
// console.log(first(arr, b));

//c2
// function first(arr,n){
//     arr.length = n;
//     return arr;
// }console.log(first(arr,b));
//bài 13

// const users = [
//     {
//     name: "Angelina Jolie",
//     age: 80
//     },
//     {
//     name: "Eric Jones",
//     age: 2
//     },
//     {
//     name: "Paris Hilton",
//     age: 5
//     },
//     {
//     name: "Kayne West",
//     age: 16
//     },
//     {
//     name: "Bob Ziroll",
//     age: 100
//     }
//     ]


// let newArr = users.map(function (users){
//     return {
//         name: `<h1>${users.name}</h1>`,
//         age: `<h2>${users.age}</h2>`
//     }
// })

// console.log(newArr);

//bài 14 

// let newBu = users.map(function (users){
//     return{
//         name: users.name
//     }
// })
// console.log(newBu);

//bài 15

// function triple(number){
//     num = number * 3
//     return num
// }
// // console.log(triple(5));

// let arr = [1,2,3,4,5,6];
// let newArr = arr.map(function multiply(arr){
// return triple(arr)
// });
// console.log(newArr);

//bài 16

// let num = [1,2,3,7,8,10,45,6];

// let number = num.filter(function(element){
//   return element > 5;
// });

// console.log(number);

//bài 17

// var members = [
//     { name: 'Lan', gender: 'female' },
//     { name: 'Linh', gender: 'female' },
//     { name: 'Trung', gender: 'male' },
//     { name: 'Peter', gender: 'gay' }
//   ];
 
// let memberLoc = members.filter(function Loc (members){
//     return members.gender == 'female'
// })

// console.log(memberLoc);

//bài 18

// let arr = [ 1,2,3,4,5,6,8,10];
// let newArr = arr.find(function(arr){
//     return arr%2==0
// });
// console.log(newArr);

//bài 19

// let a = [1,2,3,7,8,6];
// let b = prompt("nhập số");
// let newNumber = a.find(function(a){
//     return a % b == 0
// });
// console.log(newNumber);

//bài 22

// let a = Number(prompt("nhập vào số"));
// let b = Number(prompt("nhập vào số"));
// let arr = [ a , b ];
// // console.log(arr);

//  function tongArr(arr){
//     var tong = 0;
//     if(arr[0]<=arr[1]){
//         for(let i = arr[0] ; i <= arr[1] ; i++){
//              tong = tong + i
            
//         }return tong
//     }else if(arr[0]>=arr[1]){
//         for(let i = arr[0] ; i >= arr[1] ; i = i -1){
//             tong = tong + i
           
//        }return tong
//     }
//  }
// console.log(tongArr(arr));

//bài 23









