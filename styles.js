console.log (dataCollections);
//Part 1:
// loop through all numbers
for (let i = 1; i <= 100; i++) {
// divisible by 3 and 5, log fizz buzz
  if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
  } 
//divisible 3
  else if (i % 3 === 0) {
      console.log("Fizz");
  } 
//divisible by 5
  else if (i % 5 === 0) {
      console.log("Buzz");
  } 
//not divisible by either, log the number
  else {
      console.log(i);
  }
}



//Part 2:
const n = 12;

for (let num = n + 1;; num++) {
  let isPrime = true; // number is prime

// number is greater than 1
  if (num > 1) {
//checking factors
    for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
              isPrime = false; // factor is not prime
              break;
          }
      }
//prime
      if (isPrime) {
          console.log(num + " is the next prime number");
          break; // Exit loop once prime found
      }
    }
}


//part 3
const csvString =
   "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";


let cells = '';
let row = [];
// let currentCell = 0; 
// let currentRow = [];
// let table = [];

//loop through chaeacters given CSV string
for (let i = 0; i < csvString.length; i++) {
  const char = csvString[i];
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

