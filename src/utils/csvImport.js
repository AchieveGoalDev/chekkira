// import { csvToObj } from "csv-to-js-parser";
// import fs from "fs";
// import path from "path";

const csvTest = () => {
  // const fileArray = [
  //   "EK/EK5.csv",
  //   "EK/EK4.csv",
  //   "EK/EK3.csv",
  //   "EK/EKJ2.csv",
  //   "EK/EK2.csv",
  //   "EK/EKJ1.csv",
  // ];
  // const parseFile = (fileArray) => {
  //   let returnArray = [];
  //   fileArray.foreach((file) => {
  //     const data = fs.readFileSync("../data/" + file);
  //     const obj = csvToObj(data);
  //     returnArray.push(obj);
  //   });
  // };
};

export const getServerSideProps = async () => {
  const data = await fs.readdir("./data/ek");

  return {
    props: {
      data,
    },
  };
};
export default csvTest;
