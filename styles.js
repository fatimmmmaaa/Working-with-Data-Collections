// const csvString =
//   "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";


const csvString =
  "ID,Name,Occupation,Age,IsCool\n42,Bruce,Knight,41,true\n57,Bob,Fry Cook,19,true\n63,Blaine,Quiz Master,58,false\n98,Bill,Doctor's Assistant,26,true";
//create an array
//part 1
let cells = [];
let currentCell = 0;

  // Part 1 code
  if (cells[currentCell]) {
    cells[currentCell] += csvString[i];
  } else {
    cells[currentCell] = csvString[i];
  }


    // Part 1
  // if (
  //   (currentCell === columns && csvString[i + 1] === '\n') ||
  //   i + 1 === csvString.length
  // ) {
  //   // console.log(cell1, cell2, cell3, cell4);
  //   console.log(cells.toString());
  // }
//}

console.log(table);