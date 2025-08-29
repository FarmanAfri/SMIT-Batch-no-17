// ============================
// Strings: Measuring Length and Extracting Part
// ============================

// 1. String ki length nikalna
let str = "Hello, World!";  
console.log("Length of str:", str.length);  
// str.length se string ki total length milti hai -> 13


// 2. String se "World" extract karna
console.log("Extracted part:", str.substring(7, 12));  
// substring(startIndex, endIndex) se "World" nikalta hai


// 3. Check karna ke "cat" sentence me hai ya nahi
let sentence = "The cat is sleeping";  
console.log("Does 'cat' exist?", sentence.includes("cat"));  
// includes() true return karega agar word exist karta ho


// 4. "sleep" word ka index nikalna
console.log("Index of 'sleep':", sentence.indexOf("sleep"));  
// indexOf() starting position return karta hai -> 8


// ============================
// Strings: Finding a Character at a Location
// ============================

// 1. Index 3 par konsa character hai
let text = "JavaScript";  
console.log("Character at index 3:", text.charAt(3));  
// Index 3 -> 'a' (J=0, a=1, v=2, a=3)


// 2. String ka last character nikalna
let text2 = "Programming";  
console.log("Last character:", text2.charAt(text2.length - 1));  
// length-1 last index deta hai -> 'g'


// ============================
// Rounding Numbers
// ============================

// 1. Number ko nearest integer round karna
let num1 = 7.8;  
console.log("Rounded number:", Math.round(num1));  
// Math.round(7.8) -> 8


// 2. Math.floor() use karna (neeche wala integer)
let num2 = 5.9;  
console.log("Math.floor result:", Math.floor(num2));  
// Math.floor(5.9) -> 5


// 3. Math.ceil() use karna (upar wala integer)
let num3 = 4.2;  
console.log("Math.ceil result:", Math.ceil(num3));  
// Math.ceil(4.2) -> 5


// ============================
// Generating Random Numbers
// ============================

// 1. Random number 0 aur 1 ke darmiyan
console.log("Random number (0 to 1):", Math.random());


// 2. Random whole number 1 se 10 ke darmiyan
console.log("Random whole number (1 to 10):", Math.floor(Math.random() * 10) + 1);


// ============================
// Converting Strings to Integers and Decimals
// ============================

// 1. String "100" ko integer me convert karna
let strNum = "100";  
console.log("Converted to integer:", parseInt(strNum));  
// parseInt("100") -> 100


// 2. String "3.141" ko decimal (float) me convert karna
let strFloat = "3.141";  
console.log("Converted to decimal:", parseFloat(strFloat));  
// parseFloat("3.141") -> 3.141


// ============================
// Converting Numbers to Strings & Vice Versa
// ============================

// 1. Number ko string me convert karna
let num = 250;  
console.log("Number to string:", num.toString());  
// 250 -> "250"


// 2. String ko number me convert karna
let strNum2 = "45.67";  
console.log("String to number:", Number(strNum2));  
// "45.67" -> 45.67


// 3. Number ko 2 decimal places tak round karna
let num4 = 5.6789;  
console.log("Rounded to 2 decimals:", num4.toFixed(2));  
// 5.6789 -> "5.68"


// 4. Number ko 4 decimal places tak limit karna
let num5 = 3.1415926535;  
console.log("Limited to 4 decimals:", num5.toFixed(4));  
// 3.1415926535 -> "3.1416"
