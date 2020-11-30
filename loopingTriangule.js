const input = require('prompt-sync')()

var height = input("Triangle height >> ")
var triangle = ""
for(let i = 1; i <= height; i++) {
    triangle+= "#"
    console.log(triangle)
}