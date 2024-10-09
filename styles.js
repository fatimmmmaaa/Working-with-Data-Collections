// const csvString =
//   "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";


const csvString =
  "ID,Name,Occupation,Age,IsCool\n42,Bruce,Knight,41,true\n57,Bob,Fry Cook,19,true\n63,Blaine,Quiz Master,58,false\n98,Bill,Doctor's Assistant,26,true";
//create an array

//part 1
let cells = [];
let currentCell = 0; 
let currentRow = 0;
let table = [];

function reset () {
  cells = [];
  currentCell = 0;
}

for (let i = 0; i < csvString.length; i++) {
  //check for new cell
  if (csvString [i] === ',') {
    if(currentRow === 0) {
      columns++;
    }
    currentCell = i + 1;
    continue;
  }

  // checking for a new row
  if (csvString[i] === "\n") {
    //reset the array
    cells = []
    currentCell = 0;
    continue;
    }
}

  // Part 1 code
//   if (cells[currentCell]) {
//     cells[currentCell] += csvString[i];
//   } else {
//     cells[currentCell] = csvString[i];
//   }

//   if (
//     (currentCell === 3  && csvString[i + 1] === "\n") ||
//     i + 1 === csvString.length
//   ) {
//     // console.log(cell1, cell2, cell3, cell4);
//     console.log(cells.toString());
// }

// console.log(table);

