
//dynamic data typed, not statically typed like typescript
let age = 18 //number
let name = "yuvraj" //name
let alive = true //boolean
//bitInt
let health = null //null
let something//undefined
//symbol
//oject : data type of null
// console.table([health, something, age, name, alive])
// console.table([typeof health,typeof something, typeof age,typeof name,typeof alive])
// console.table([typeof undefined, typeof 2,typeof "string",typeof true, typeof null])

// let score
// console.log(score)
//7 types(Primitive)
// String
// Number
// Boolean
// BigInt; big values, scientific
// Symbol
// null
// undefined

let id = Symbol("123")
let anotherId = Symbol("123") 
id = "123"
id = Symbol("123")

// console.log(id==anotherId)

//Non-Primitive; by reference
//Array, Object and Functions

const heros1 = ["ironman", "superman", "batman"]
const heros = ['ronman', 'superman',' batman']//same as above
//const heros2 = {"ironman", "superman", "batman"}//not same as above two

// console.log(heros)
// console.log(heros1)

//anything inside curly braces is a object
let ojb = {
    name: "string",
    age: 4,
    class1: [2,3,4]
}
// console.log(ojb)

// let myfunc = function(){
//     console.log("hello")
// }
// console.log(myfunc)


