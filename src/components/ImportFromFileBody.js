import React from "react";
import csv from "csv";
import axios from "../axios";

const ImportFromFileBody = () => {
  let fileReader;

  // const handleFileRead = e => {
  //   const content = fileReader.result;
  //   console.log(content);
  // };

  const dataAsString = data => {
    let stringData = "";
    data.forEach(element => {
      element.forEach((elementWithinElement, index, element) => {
        if (element.length === index + 1) {
          stringData = stringData + elementWithinElement + ",\n";
        } else {
          stringData = stringData + elementWithinElement + ",";
        }
      });
    });
    return stringData;
  };

  const handleFileChosen = file => {
    fileReader = new FileReader();
    fileReader.onload = () => {
      csv.parse(fileReader.result, (err, data) => {
        axios
          .post("/report", { report: dataAsString(data) })
          .then(data => console.log(data));
        console.log(data);
      });
    };
    fileReader.readAsText(file);
  };

  return (
    <div>
      <input
        type="file"
        id="file"
        className="input-file"
        accept=".csv"
        onChange={e => handleFileChosen(e.target.files[0])}
      />
    </div>
  );
};

export default ImportFromFileBody;
