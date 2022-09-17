
// const playerOne = {
//     name: "tim",
//     marker: "X"
//   }
  
//   const playerTwo = {
//     name: "jenn",
//     marker: "O"
//   }

//   function printName(player){
//     console.log(player.name)
//   }

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}.`
    }
}

const book1 = new Book('The Godfather', 'Mario Puzo', 448, 'read')

console.log(book1.info())