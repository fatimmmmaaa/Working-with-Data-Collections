// console.log (dataCollections);
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
// const csvString =
//   'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26';

const csvString =
  'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232';

let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';

let currentCell = 1;

for (let i = 0; i < csvString.length; i++) {
  //checking for new cell
  if (csvString[i] === ',') {
    currentCell++;
    continue;
  }
  // checking for a new row
  if (csvString[i] === '\n') {
    cell1 = '';
    cell2 = '';
    cell3 = '';
    cell4 = '';
    currentCell = 1;
    continue;
  }

  switch (currentCell) {
    case 1:
      cell1 += csvString[i];
      break;
    case 2:
      cell2 += csvString[i];
      break;
    case 3:
      cell3 += csvString[i];
      break;
    case 4:
      cell4 += csvString[i];
      break;

    default:
      console.log(`cell${currentCell} doesn't exist`);
      break;
  }

  if (
    (currentCell === 4 && csvString[i + 1] === '\n') ||
    i + 1 === csvString.length
  ) {
    // console.log(cell1, cell2, cell3, cell4);
  }
}


// // part 2:
// // Variables
// let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// let cell = "";
// let rows = [];

// //first row of data
// for(let char of csvData) {
//   if (char === ',') {
//     rows.push(cell);
//     cell='';
//   } else if (char === '\n') {
//     rows.push(cell);
//     console.log(rows);
//     rows = [];
//     cell = '';
//   } else {
//     cell += char;
//   }
// }

// //variable
// let newArr = [];

// for(let char of newArr){
//   if (char === ',') {
//     rows.push(cell);
//     cell='';
//   } else if (char === '\n'){
//     rows.push(cell);
//     newArray.push(rows);
//     rows=[];
//     cell='';  
//   } else {
//     cell += char;
//   }
// }

// console.log(newArr);



//part3: 
let csvData3 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
let rows = csvData3.split('\n');
let headers = rows[0].split(',').map(header => header.toLowerCase());
let newArray = [];
for (let i = 1; i < rows.length; i++) {
  let cells = rows[i].split(',');
  let rowObject = {};

  for (let j = 0; j < headers.length; j++) {
    rowObject[headers[j]] = cells[j];
  }
newArray.push(rowObject);
}

console.log(newArray);











