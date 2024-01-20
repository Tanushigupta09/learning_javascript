// //STRING OPERATIONS AND ITS OUTPUT:
// console.log(1+"2"); // Output :12
// console.log("1"+2);// Output :12
// console.log("1"+2+2);// Output :122 jab aapko string pehle diya hua ho and baad mey aapko addition perform karna ho toh waoh nhi hota and reason echma script ki offcial documentataion par hai
// console.log(2+2+"1");// Output :41 jab aapko number pehle diya hua ho toh woh add ho jaata and string baad mey add ho jaati hai and reason same echma script ki official documentation par hai

// //BASIC OPRATIONS AND ITS OUTPUT
// console.log(2+2);// output:4
// console.log(15-9);//output:6
// console.log(15*9);//output:135
// console.log(15/9);//output:1.666
// console.log(15%9);//output:6

// //TRICKY OPERATION AND ITS OUTPUT
// console.log(+true)//output: 1
// // console.log(true+)//gives an error
// console.log(+"")//output:0

// //POSTFIX OPERATION
// let x = 3;
// const y = x++;
// // x is 4; y is 3

// let x2 = 3n;
// const y2 = x2++;
// // x2 is 4n; y2 is 3n

// // PREFIX operation
// let x1 = 3;
// const y1 = ++x;
// // x1 is 4; y1 is 4

// let x3 = 3n;
// const y3 = ++x3;
// // x3 is 4n; y3 is 4n

// //COMPARISON OPERATORS:

// // While comparing two variables make sure there datatypes are same else it will lead to disaggrement between what you expected and what the output actually comes
// //typescript doen't allow you to compare between two different datatypes
// console.log("2">1)//op : true;
// console.log("02">1)// op: true;

// //The reason is that an equality check == and comparisons >,<> = <= work differently.
// // Comparisons convert null to a number, treating it as 0

// console.log(null>0); //0utput=> false
// console.log(null==0); //0utput=> false
// console.log(null>=0); //0utput=> true Comparisons convert null to a number, treating it as 0

// console.log(undefined>0); //0utput=> false
// console.log(undefined<0); //0utput=> false
// console.log(undefined==0); //0utput=> false
// console.log(undefined>=0); //0utput=> false

//=== equals check the condition and datatype  while == equals checks the condition and if one string and one one number is given then it will automatically convert string into numbers and then checks the conditon while when we apply === equals it will not convert the datatype automatically it will check the conditon on the given inputs.
console.log("2"==2)//output true
console.log("2"===2)//output false