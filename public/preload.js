const csv = require("csv-to-js-parser");
const fs = window.require("fs");

const fileArray = [
  "EK/EK5.csv",
  "EK/EK4.csv",
  "EK/EK3.csv",
  "EK/EKJ2.csv",
  "EK/EK2.csv",
  "EK/EKJ1.csv",
];

const parseFile = (fileArray) => {
  let returnArray = [];
  fileArray.foreach((file) => {
    const data = fs.readFileSync("../data/" + file);
    const obj = csv.csvToObj(data);
    returnArray.push(obj);
  });
};

console.log(parseFile(fileArray));
