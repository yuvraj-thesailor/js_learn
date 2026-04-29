let score = undefined //"33", true, undefined, null, "33ss", "string",""

//=========================CONVERSION TO NUMBER==========================
//string -> NaN
//true/false -> 1/0
//undefined -> NaN
//null -> 0
//""(empty string) -> 0

// let inNumber = Number(score)
// console.log("original: ", score)
// console.log("converted to number: " ,inNumber)
// console.log(typeof inNumber)

//=========================CONVERSION TO BOOLEAN==========================
//"", '', 0 -> false
//" " , ' ', 'd', "anything", "0", '0'-> true
//null -> false
//undefined -> false

// score = undefined
// let bool = Boolean(score)
// console.log("converted to boolean: ", bool);
// console.log(typeof bool);

//===========================CONVERSION TO STRING==========================
//33 -> "33"
//null -> "null"
//undefined -> "undefined"
//'a' -> "a"
//true -> "true"
//"",'', "     " -> shows nothing i.e. ""

// score = null
// let str = String(score)
// console.log("original: ", score)
// console.log("converted to string: " ,str)
// console.log(typeof str)

//================================The End===================================