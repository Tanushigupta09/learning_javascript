// The objects that we created from the constructor are singleton objects while the objects that we created from the literals are not singleton objects

// OBJECT LITERALS SYNTAX:

const myUser={
    username:"Tanushi ",
    "fullname":"Tanushi Gupta",
    email:"1234@gmail.com",
    isLoggedIn:true,
    loggedDays:["monday","tuesday"],
}

// console.log(myUser)

// HOW TO ACCESS OBJECT Element

// SYNTAX1:

// console.log(myUser.username);

// SYNTAX2:
// console.log(myUser["username"]);


// TO ACCESS THE OBJECTS WHOSE KEY IS DEFINED IN STRING

// console.log(myUser["fullname"]);

// HOW TO PASS SYMBOL IN OBJECTS

// const mySymbol=Symbol("key1");
// const myJs={
//     username:"tanushi",
//     [mySymbol]:"key1",
//     email:"1234@google.com",
// }

// console.log(myJs[mySymbol]);

// HOW TO CHANGE THE VALUES OF OBJECTS KEY:
// myUser.username="krishn",
// console.log(myUser);


// POINTS TO REMEMBER

// IN OBJECTS THE POINTS TO REMEMBER IS THAT THE TYPE OF ALL KEYS ARE STRINGS and since js knows it by default so we don't specify the key values in strings
// If a key pair is defined in string we can't access it with console.log(user.fullname) it will show us an error the only way we can acces these type of keys are console.log(user["fullname"]),
// To put symbol in object the key value of that symbol is passed in square brackets []