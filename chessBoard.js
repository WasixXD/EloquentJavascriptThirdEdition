const input = require('prompt-sync')()

var column = input("Columns >> ")
var rows = input("Rows >> ")
var board = ""

for(let i = 0; i < rows; i++) {
    for(let g = 0; g < columnr/2 ; g++) {
        board += i % 2 ==0? " #" : "# "
    }
    board += "\n"
}
console.log(board)
